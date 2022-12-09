// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Favorite, Donut, Cart, CartItem } = initSchema(schema);

export {
  Favorite,
  Donut,
  Cart,
  CartItem
};