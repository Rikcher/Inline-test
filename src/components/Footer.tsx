import React from 'react';
import { Link } from 'react-router-dom';
import LogoReverse from '/src/assets/LogoColorReversed.svg' 
import NavigationLinks from './ui/website-navigation/NavigationLinks';
import ExternalLink from './ui/website-navigation/ExternalLink';
import { useTranslation } from 'react-i18next';
import useLargeScreen from '../hooks/useLargeScreen';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const isLargeScreen = useLargeScreen();
    console.log(isLargeScreen)

    return (
        <footer className={`w-full flex flex-col lg:flex-row gap-7 lg:justify-between items-center bg-gray-600 py-5 px-10`}>
            <Link to={"/"}>
                <img src={LogoReverse} alt="" />
            </Link>
            <div className='flex justify-center lg:flex-col flex-wrap 2xl:max-h-20 gap-x-5 gap-y-2 text-gray-300 text-sm font-normal'>
                <NavigationLinks textColor='text-gray-300' textSize='text-sm' fontWeight='font-normal' hoverStyle='underline'/>
            </div>
            <div className='flex text-center lg:text-left justify-center lg:flex-col flex-wrap 2xl:max-h-20 gap-x-5 gap-y-2 text-gray-300 text-sm font-normal'>
                <ExternalLink label={t("footer_link_1")}/>
                <ExternalLink label={t("footer_link_2")}/>
                <ExternalLink label={t("footer_link_3")}/>
            </div>
            <p className='text-gray-300 text-center lg:text-right lg:self-end'>{t("rights_reserved")}</p>
        </footer>
    );
};

export default Footer