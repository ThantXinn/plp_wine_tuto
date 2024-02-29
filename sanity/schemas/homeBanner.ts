import { defineField, defineType } from "sanity";

const homeBanner = defineType({
    name: "homeBanner",
    type: "document",
    title: "Home Banner",
    fields: [
        defineField({
            name: "bannerTitle",
            type: "string",
            title:"Title"
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            validation: (rule) => rule.required(),
            options: {
                hotspot:true
            },
            preview: {
                select: {
                    imageUrl: "asset.url",
                    title:"caption"
                }
            }
        })
    ],
})

export default homeBanner;