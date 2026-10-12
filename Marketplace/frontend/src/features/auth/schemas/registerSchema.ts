import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string('Nome inválido'),
    email: z.email('Email inválido'),
    password: z.string().min(6, 'Mínimo de 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirme sua senha'),
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
});

export type RegisterFormData = z.infer<typeof registerSchema>;