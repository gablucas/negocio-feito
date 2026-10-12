import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";
import { Input } from "../../../layouts/Input";

export function LoginForm() {
    const { submit, error } = useLogin();

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema)});

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 w-100">

            <Input label="Email" name="email" register={register} error={errors.email} />
            <Input label="Senha" name="password" type="password" register={register} error={errors.password} />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer">
                {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
        </form>
  );
}