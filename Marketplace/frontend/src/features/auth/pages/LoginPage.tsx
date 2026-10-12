import { LoginForm } from "../components/LoginForm";

export function LoginPage() {


    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center mt-24 min-h-screen'>
                <div>
                    <h1 className='text-xl text-start'>Entrar</h1>
                    <LoginForm />
                </div>
        </div>
    )
}