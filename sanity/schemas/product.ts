import { defineField, defineType } from "sanity";

export default defineType({
    name: "product",
    type:"document",
    title: "Product",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title:"Product Name"
        }),
        defineField({
            name: "image",
            type: "array",
            title: "Product Images",
            of: [{ type: "image" }]
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Product Description"
        }),
        defineField({
            name: "body",
            title: "Body",
            type:"blockContent"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Product Slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "isNew",
            title: "New Product",
            type: "boolean",
        }),
        defineField({
            name: 'originalPrice',
            type: 'number',
            title: 'Original Price',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "isDiscount",
            title: "Discount",
            type:"boolean",
        }),
        defineField({
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount In Percentage',
            description: "No need to add '%' sign.",
            hidden:({document}:any)=> !document.isDiscount,
            validation: (rule) => rule.required().min(0).max(100),
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            description: "Quantity must be number.",
        }),
        defineField({
            name: "instock",
            title: "In Stock Items",
            type: "number",
            description: "In Stock avaliable Items must be number.",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            description: "Rating must be between 1 to 5.",
            validation:(rule)=>rule.required()
        }),
        defineField({
            name: "productby",
            type: "array",
            title: "Product By",
            of: [{ type: "reference", to: { type: "productby" } }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "winetypes",
            title: "Wine Types",
            type: "array",
            of: [{ type: "reference", to: { type: "winetypes" } }],
            validation: (rule) => rule.required(),
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    }
})