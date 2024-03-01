import { client } from "@/sanity/lib/client";
import { config } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const webhookSecret = config.stripe_webhook_secret!;
const stripe = new Stripe(config.stripe_secret_key!, {
    apiVersion: "2023-10-16",
    typescript:true,
})

const fullfillOrder = async (session:any) => {
    try {
        await client.create({
            _type: "order",
            status: session.status,
            message: "Payment Succeed",
            description: session.description || "Test Order",
            title: session.id || "Order",
            method: session.confirmation_method,
            amount: session.amount / 100,
        })
    } catch (error:any) {
        console.log("error : ",error.message)
    }
}
export async function POST(req:NextRequest) {
    const payload = await req.text();
    const signature = req.headers.get("stripe-signature")!;

    //console.log(signature);
    let event: Stripe.Event | null = null;

    try {
        event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

        if (event.type === "payment_intent.succeeded") {
            const session = event.data.object;
            return fullfillOrder(session)
                .then(() => (NextResponse.json({ status: 200 })))
                .catch((err: any) =>
                    NextResponse.json({ error: err.message }, { status: 500 })
                );
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            return NextResponse.json({satus: 200})
        }
    }
    return NextResponse.json({ received: true });
}