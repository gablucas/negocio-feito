import { useForm } from "react-hook-form"
import type { Store } from "../store.types"
import { storeSchema, type StoreData } from "../store.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/layouts/Input"
import { FormLayout } from "@/layouts/FormLayout"

interface StoreFormParams {
    initialValues? : Store,
    submit: any
}

export function StoreForm({ initialValues, submit } : StoreFormParams) {

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<StoreData>({ resolver: zodResolver(storeSchema) });

    return (
        <FormLayout onSubmit={handleSubmit(submit)} isSubmitting={isSubmitting}>
            <Input label="Nome" name="name" error={errors.name} register={register} defaultValue={initialValues?.name} />
        </FormLayout>
    )
}