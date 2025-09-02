import { z } from 'zod';
import { insertProductsSchema } from '@/lib/validators';
import { Decimal } from '@prisma/client/runtime/library';

export type Product = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: Decimal;
  createdAt: Date;
  updatedAt: Date;
};
