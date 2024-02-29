import { PortableTextBlock } from "sanity";

export interface ContentType{
    title: string,
    description: PortableTextBlock[],
    category:string
}