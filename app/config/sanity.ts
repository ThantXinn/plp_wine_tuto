import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client =  createClient({
    projectId: "aiczbu19",
    dataset: "production",
    apiVersion: "2024-01-28",
    token:"skZ8BAz5sw1xHIkBCvIq6XhNUxc06QM2s9uLi43iqHyHIcG5Jle5uDqU4D97qckjoNakdHmXFIoZpMnMRVqqrOywC0wKNVFmpE5xZhDdUKdAdaxABftE3bazbpPMKm3abRrGzRjLBkvYClEZPTnN1ozINYrnBxvjJF4V92jVXon0J4lHNSRg",
    useCdn: true,
});

const imgUrlBuilder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return imgUrlBuilder.image(source);
}