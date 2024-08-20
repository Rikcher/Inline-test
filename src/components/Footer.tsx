import React from 'react';
import { Link } from 'react-router-dom';
import LogoReverse from '/src/assets/LogoColorReversed.svg' 
import NavigationLinks from './ui/NavigationLinks';

const Footer: React.FC = () => {

    return (
        <footer className='w-full flex justify-between items-center bg-gray-600 py-5 px-10'>
            <Link to={"/"}>
                <img src={LogoReverse} alt="" />
            </Link>
            <div className='flex flex-col flex-wrap max-h-20 gap-x-5 gap-y-2 text-gray-300 text-sm font-normal'>
                <NavigationLinks textColor='text-gray-300' textSize='text-sm' fontWeight='font-normal' hoverStyle='underline'/>
                <a className='hover:underline' target='_blank' href="#">Personal data protection policy</a>
                <a className='hover:underline' target='_blank' href="#">Policy on processing and protection of personal data</a>
                <a className='hover:underline' target='_blank' href="#">Offer for provision of services</a>
            </div>
            <p className='text-gray-300 self-end'>© 2024 Field to Fork. All rights reserved. (Updated 07/24)</p>
        </footer>
    );
};

export default Footer