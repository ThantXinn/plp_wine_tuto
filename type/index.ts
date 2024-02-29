interface Config{
    sanity_project_id : string,
    sanity_dataset: string,
    sanity_api_version: string,
    sanity_api_token: string,
    node_env: string,
    next_auth_url: string,
    next_auth_secret: string,
    github_id: string,
    github_secret: string,
    google_client_id: string,
    google_client_secret: string,
    stripe_public_key: string,
    stripe_secret_key: string,
    stripe_webhook_secret:string
}

export const config: Config ={
    sanity_project_id : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    sanity_dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    sanity_api_version: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    sanity_api_token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
    node_env: process.env.NODE_ENV!,
    next_auth_url: process.env.NEXTAUTH_URL!,
    next_auth_secret: process.env.NEXTAUTH_SECRET!,
    github_id: process.env.GITHUB_ID!,
    github_secret: process.env.GITHUB_SECRET!,
    google_client_id: process.env.GOOGLE_CLIENT_ID!,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET!,
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY!,
    stripe_webhook_secret:process.env.STRIPE_WEBHOOK_SECRET!
}