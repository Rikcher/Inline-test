import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '/src/assets/Logo.svg'
import Navbar from './header/Navbar';
import MobileNavbar from './header/MobileNavbar';
import { useNavbar } from '../contexts/NavbarContext';


const Header: React.FC = () => {
    const { isLargeScreen } = useNavbar()

    return (
        <header className='w-full flex px-10 py-5'>
            <nav className='grow flex justify-between items-center'>
                <Link to={"/"}>
                    <img src={Logo} alt="" />
                </Link>
                {isLargeScreen ? (
                    <Navbar/>
                ) : (
                    <MobileNavbar/>
                )}
            </nav>
        </header>
    );
};

export default Header;
