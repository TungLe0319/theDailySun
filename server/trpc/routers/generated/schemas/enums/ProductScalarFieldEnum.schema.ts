/* eslint-disable */
import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'price',
  'img',
  'stripe',
  'productImg',
  'type',
  'audience',
  'quantity',
]);
