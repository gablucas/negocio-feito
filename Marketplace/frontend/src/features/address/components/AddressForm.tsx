import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/layouts/Input";
import { addressSchema, type AddressData } from "../address.schema";
import type { Address } from "../address.types";

interface AddressFormParams {
    initialValues? : Address,
    submit: any
}

export function AddressForm({ initialValues, submit } : AddressFormParams) {

    const { register, handleSubmit, formState: { errors, isSubmitting}, } = useForm<AddressData>({ resolver: zodResolver(addressSchema)});

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 w-100">
            <Input label="Descrição" name="label" error={errors.label} register={register} defaultValue={initialValues?.label}/>
            <Input label="CEP" name="postalCode" error={errors.postalCode} register={register} defaultValue={initialValues?.postalCode} />
            <Input label="Logradouro" name="street" error={errors.street} register={register} defaultValue={initialValues?.street} />
            <Input label="Número" name="number" error={errors.number} register={register} defaultValue={initialValues?.number} />
            <Input label="Bairro" name="neighborhood" error={errors.neighborhood} register={register} defaultValue={initialValues?.neighborhood} />
            <Input label="Cidade" name="city" error={errors.city} register={register} defaultValue={initialValues?.city} />
            <Input label="Estado" name="state" error={errors.state} register={register} defaultValue={initialValues?.state} />
            <Input label="Complemento" name="complement" error={errors.complement} register={register} defaultValue={initialValues?.complement} />

            <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer">
                { isSubmitting ? "Enviando" : "Enviar" }
            </button>
        </form>
    );
}