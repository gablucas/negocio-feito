import { Link } from 'react-router-dom';
import logo from '../core/assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg">
            <Link to="/">
                <img src={logo} alt="logo negócio feito" className='w-40' />
            </Link>
        </footer>
    );
}