import { z } from 'zod';

export const addressSchema = z.object({
    label: z.string().min(2, "Informe uma descrição"),
    postalCode: z.string().min(8, "Digite um CEP válido"),
    street: z.string().min(2, "Informe uma rua"),
    number: z.string().min(1, "Informe um número"),
    neighborhood: z.string().min(2, "Informe um bairro"),
    city: z.string().min(2, "Informe uma cidade"),
    state: z.string().min(2, "Informe um estado"),
    complement: z.string().optional()
})

export type AddressData = z.infer<typeof addressSchema>;