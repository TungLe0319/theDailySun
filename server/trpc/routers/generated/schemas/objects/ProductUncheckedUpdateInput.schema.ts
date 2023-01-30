/* eslint-disable */
import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    img: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stripe: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    productImg: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    type: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    audience: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    cartId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const ProductUncheckedUpdateInputObjectSchema = Schema;
