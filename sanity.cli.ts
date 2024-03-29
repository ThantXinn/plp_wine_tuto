/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
import { config } from './type'

const projectId = config.sanity_project_id
const dataset = config.sanity_dataset

export default defineCliConfig({ api: { projectId, dataset } })
