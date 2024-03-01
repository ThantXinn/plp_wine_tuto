import { defineField, defineType } from "sanity";

export default defineType({
    name: "winetypes",
    title: "Wine Types",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type:"string"
        })
    ]
})