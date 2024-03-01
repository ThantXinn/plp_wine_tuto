import { defineField, defineType } from "sanity";

export default defineType({
    name: "productby",
    type: "document",
    title: "Product By",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title:"Title",
        }),
    ]
})