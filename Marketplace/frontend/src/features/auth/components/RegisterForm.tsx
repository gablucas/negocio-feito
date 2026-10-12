import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useRegister"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../layouts/Input";
import { Link } from "react-router-dom";
import { registerSchema, type RegisterFormData } from "../schemas/registerSchema";

export function RegisterForm() {
    const { submit, error, result } = useRegister();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema)});

    return (
        result === null ? (
            <>
                <h1 className='text-xl text-start'>Crie sua conta</h1>
                <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 w-100">
                    <Input label="Nome" name="name" error={errors.name} register={register} />
                    <Input label="Email" name="email" error={errors.email} register={register} />
                    <Input label="Senha" name="password" type="password" error={errors.password} register={register} />
                    <Input label="Confirmar Senha" name="confirmPassword" type="password" error={errors.confirmPassword} register={register} />
                    
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer">
                        { isSubmitting ? "Atualizando" : "Atualizar" }
                    </button>
                </form>
            </>
        ) : (
            <div className="flex flex-col items-center">
                <span className="text-center material-symbols-outlined text-green-600 !text-[70px]">verified</span>
                <span className="text-center text-4xl text-green-600">Conta criada com sucesso</span>
                <span className="text-gray-500 mt-2 text-center">{result.name} sua conta foi criada com sucesso, <br/> foi enviado um email de confirmação para {result.email}!</span>
                <span className="text-gray-700 mt-2 text-center font-bold">Mas como o projeto esta em desenvolvimento, sua conta já está confirmada! =D</span>
                <Link className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer mt-4" to={"/login"}>Fazer login</Link>
            </div>
        )
    )
}