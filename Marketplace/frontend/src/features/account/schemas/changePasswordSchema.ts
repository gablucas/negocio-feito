import { z } from 'zod';

export const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, 'Informe sua senha atual'),
        newPassword: z.string().min(6, 'Mínimo de 6 caracteres'),
        confirmPassword: z.string().min(1, 'Confirme a nova senha')
    })
    .refine((d) => d.newPassword === d.confirmPassword, {
        path: ['confirmPassword']
    });

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;