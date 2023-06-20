/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

// import { visionTool } from '@sanity/vision'
// import { defineConfig } from 'sanity'
// import { deskTool } from 'sanity/desk'

// // see https://www.sanity.io/docs/api-versioning for how versioning works
// import { apiVersion, dataset, projectId } from './sanity/env'
// import { schema } from './sanity/schema'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   //edit schemas in './sanity/schema'
//   schema,
//   plugins: [
//     deskTool(),
//     // Vision lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({ defaultApiVersion: apiVersion }),
//   ],
// })

import { defineConfig } from "sanity"
import {deskTool} from 'sanity/desk'
// import project from "./sanity/schemas/project-schema"
import schemas from './sanity/schemas/index'
const config=defineConfig({
    projectId:'4fl3kkx8',
    dataset:'production',
    title:'my personal website',
    apiVersion:'2023-05-26',
    basePath: '/studio',
    plugins: [deskTool()],
    schema: {types: schemas}
})
export default config