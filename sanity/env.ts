import { config } from "@/type"

export const apiVersion =
  config.sanity_api_version || '2024-02-03'

export const dataset = assertValue(
  config.sanity_dataset,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  config.sanity_project_id,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  config.sanity_api_token,
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
