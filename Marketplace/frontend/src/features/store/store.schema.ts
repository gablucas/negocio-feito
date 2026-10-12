import { z } from 'zod';

export const storeSchema = z.object({
    name: z.string('Nome inválido')
});

export type StoreData = z.infer<typeof storeSchema>;