import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <div id='AppWrapper' className='min-h-screen flex flex-col items-cener'>
            <Header />
            <main className='grow w-full px-10 py-5'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

