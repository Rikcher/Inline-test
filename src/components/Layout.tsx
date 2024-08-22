import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { NavbarProvider } from '../contexts/NavbarContext';


const Layout: React.FC = () => {
    return (
        <div id='AppWrapper' className='min-h-screen flex flex-col items-cener'>
            <NavbarProvider><Header /></NavbarProvider>
            <main className='grow w-full px-5 lg:px-48 pt-5 pb-8 lg:pb-16'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

