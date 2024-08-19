import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '/src/assets/Logo.svg'
import CustomLink from './ui/CustomLink';

const Header: React.FC = () => {

    return (
        <header className='w-full flex px-10 py-5'>
            <nav className='grow flex justify-between items-center'>
                <Link to={"/"}>
                <img src={Logo} alt="" />
                </Link>
                <div className='flex gap-10'>
                    <CustomLink path='/about' label='About'/>
                    <CustomLink path='/contact' label='Contact'/>
                    <CustomLink path='/cart' label='Cart'/>
                </div>
            </nav>
        </header>
    );
};

export default Header;
