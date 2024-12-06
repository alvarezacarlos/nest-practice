import { z } from 'zod';

export const createPropertySchema = z
  .object({
    name: z.string(),
    description: z.string().min(5, { message: 'some message' }),
    area: z.number().positive(),
  })
  .required();


  /** Infer out dto from our createPropertySchema */
export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>