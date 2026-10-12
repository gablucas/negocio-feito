import { createBrowserRouter } from "react-router-dom";
import App from  './App';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from "./pages/NotFoundPage";
import { GuestRoute } from "./app/GuestRoute";
import { ProtectedRoute } from "./app/ProtectedRoute";
import { ProfilePage } from "./features/account/pages/ProfilePage";
import { MyAccountLayout } from "./layouts/MyAccountLayout";
import { RegisterPage } from "./features/auth/pages/RegisterPage";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { PersonalInformation } from "./features/account/pages/Personalnformation";
import { AddressesPage } from "./features/address/pages/AddressesPage";
import { CreateAddressPage } from "./features/address/pages/CreateAddressPage";
import { UpdateAddressPage } from "./features/address/pages/UpdateAddressPage";
import { StoresPage } from "./features/store/pages/StoresPage";
import { CreateStorePage } from "./features/store/pages/CreateStorePage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            {
                element: <GuestRoute />,
                children: [
                    { path: 'login', element: <LoginPage /> },
                    { path: 'registrar', element: <RegisterPage /> },
                ]
            },
            {
                element: <ProtectedRoute />,
                children: [
                    { 
                        path: 'minha-conta', 
                        element: <MyAccountLayout />,
                        children: [
                            { index: true, element: <ProfilePage /> },
                            { path: 'informacoes-pessoais', element: <PersonalInformation /> },
                            { path: 'enderecos', element: <AddressesPage /> },
                            { path: 'enderecos/criar', element: <CreateAddressPage /> },
                            { path: `enderecos/:id/editar`, element: <UpdateAddressPage /> },
                            { path: `loja`, element: <StoresPage /> },
                            { path: `loja/criar`, element: <CreateStorePage /> },
                        ]
                    },
                ],
            },
            { path: '*', element: <NotFoundPage /> }
        ]
    }
]);