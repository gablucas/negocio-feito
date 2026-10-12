import type { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    name: Path<T>;
    label: string;
    type?: string;
    register?: UseFormRegister<T>;
    error?: FieldError;
    disabled?: boolean,
    defaultValue?: string
}

export function Input<T extends FieldValues>({ name, label, type = 'text', register, error, disabled = false, defaultValue = "" }: InputProps<T>) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium">{label}</label>
            <input id={name} type={type} className="w-full border rounded px-3 py-2 disabled:bg-gray-200" disabled={disabled} {...(register ? register(name) : {})} defaultValue={defaultValue} />
            {error && <p className="text-red-600 text-sm">{error.message}</p>}
        </div>
    )
}