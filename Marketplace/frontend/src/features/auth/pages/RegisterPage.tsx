import { RegisterForm } from "../components/RegisterForm";


export function RegisterPage() {
    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center mt-24 min-h-screen'>
                <div>
                    <RegisterForm />
                </div>
        </div>
    )
}