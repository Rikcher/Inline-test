import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <div id='AppWrapper' className=''>
            <Header />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

