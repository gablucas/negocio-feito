import { z } from 'zod';

export const updateProfileSchema = z.object({
    name: z.string().min(2, "Informe seu nome"),
});

export type UpdateProfileData = z.infer<typeof updateProfileSchema>;