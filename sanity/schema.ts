import { type SchemaTypeDefinition } from 'sanity'
import banner from './schemas/banner'
import blockContent from './schemas/blockContent'
import content from './schemas/content'
import homeBanner from './schemas/homeBanner'
import maker from './schemas/maker'
import order from './schemas/order'
import product from './schemas/product'
import winetype from './schemas/winetype'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner,product,blockContent,homeBanner,maker,content,winetype,order],
}
