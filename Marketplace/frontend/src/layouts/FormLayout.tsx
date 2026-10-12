import type { ReactNode } from "react";

interface FormLayoutProps {
    children: ReactNode;
    onSubmit: React.SubmitEventHandler<HTMLFormElement>;
    isSubmitting?: boolean;
}

export function FormLayout({ children, onSubmit, isSubmitting }: FormLayoutProps) {

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-100">
            { children }

            <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer">
                { isSubmitting ? "Enviando" : "Enviar" }
            </button>
        </form>
    )
}