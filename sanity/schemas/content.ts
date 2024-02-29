import { defineField, defineType } from "sanity";

export default defineType({
    name: "content",
    type: "document",
    title: "Content",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Content Title",
            validation: (rule) => rule.max(30)
        }),
        defineField({
            name: "description",
            type: "array",
            title: "Content Description",
            of:[{type:"block"}]
        }),
    ]
})