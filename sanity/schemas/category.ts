import { defineField, defineType } from "sanity";

export default defineType({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        defineField({
            name: "title",
            type:"string",
            title: "Title",
        }),
        defineField({
            name: 'isNew',
            title: 'New Product',
            type: 'boolean',
        }),
        defineField({
            name: 'isDiscount',
            title: 'Discount Product',
            type: 'boolean',
        }),
        defineField({
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount In Percentage',
            hidden:({document}:any)=>(!document.isDiscount),
            validation: (rule) => rule.required().min(0).max(100),
        }),
        defineField({
            name: 'isPopular',
            title: 'Popular Product',
            type: 'boolean',
        }),
        defineField({
            name: "poducts",
            title: "Products",
            type: "array",
            of: [
                { type: "reference", to: { type: "product" } }
            ],
            hidden: ({ document }:any) => (!document.isNew) && (!document.isDiscount) && (!document.isPopular), // Hide the category field if isNew/isDiscount/isPopular is not true
            validation: (rule) => rule.required()
        }),
    ],
    preview: {
    select: {
      title: 'title', // Select the title of the document
    },
  },
})