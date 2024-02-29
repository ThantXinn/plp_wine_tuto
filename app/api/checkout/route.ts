import { urlForImage } from "@/sanity/lib/image";
import { config } from "@/type";
import { ProductType } from "@/type/productType";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(config.stripe_secret_key!)
    try {
        const reqBody = await request.json();
        const { items, email } = await reqBody;

        const updatetoStripeItems = await items.map((item: ProductType) => (
            {
                quantity: item.quantity,
                price_data: {
                    currency: "jpy",
                    unit_amount: item.isDiscount ? (item.originalPrice - (item.originalPrice * (item.discountPercentage /100))) : item.originalPrice,
                    product_data: {
                        name: item.title,
                        description: item.description,
                        images: [urlForImage(item.image[0])]
                    }
                }
            }
        ));

        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["US", "JP", "SG"],
        },
        line_items: updatetoStripeItems,
        mode: "payment",
        success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.next_auth_url}/cancel`,
        metadata: {
            email,
      },
    });
    return NextResponse.json({
      message: "Connection is alive",
      success: true,
      id: session.id,
    });
        
    } catch (error:any) {
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }
}