import { defineField } from "sanity";

const banner = {
    type: "document",
    name: "banner",
    title: "Banner",
    fields: [
        defineField({
            name: "title",
            title: "Banner Title",
            type:"string"
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: "Banner Image",
            validation: (rule) => rule.required(),
            options: {
                hotspot:true
            },
            preview: {
                select: {
                    imageUrl: "asset.url",
                    title:"caption",
                }
            }
        })
    ],
    preview: {
        select: {
            title: "title",
            media:"image"
        }
    }
}

export default banner;