import { useForm } from "react-hook-form";
import { useUpdateProfile } from "../hooks/useUpdateProfile"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/layouts/Input";
import type { Profile } from "../account.types";
import { updateProfileSchema, type UpdateProfileData } from "../schemas/updateProfileSchema";

export function UpdateProfileForm({ profile }: { profile: Profile }) {

    const { submit, error } =  useUpdateProfile();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<UpdateProfileData>({ 
        resolver: zodResolver(updateProfileSchema)
    });

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 w-100">
            <Input label="Nome" name="name" error={errors.name} register={register} defaultValue={profile.name} />
            <Input label="Email" name="name" error={errors.name} disabled defaultValue={profile.email} />

            {error && <p className="text-red-600 text-sm">{error}</p>}
                
            <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer">
                { isSubmitting ? "Atualizando" : "Atualizar" }
            </button>
        </form>
    )
}