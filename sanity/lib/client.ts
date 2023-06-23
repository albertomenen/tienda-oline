import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skRkOfYDplAkG0TbcQJdGPsfVcza4pNcc6og74dPHDWLbubYolFqJcJ76dabtZaxNkdaGh8LJsOIql8sZsAIz32gtoqEdqjPlwAvgJ569YmWjtQZnF4bOdDdgrCvvZXKnJEA0hSJnRHLBdnTrBpRss8HunmzgXlLnP0NBnQI8P3qJPRVSc4w",  
})
