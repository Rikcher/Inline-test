import React from 'react';
import { Link } from 'react-router-dom';
import LogoReverse from '/src/assets/LogoColorReversed.svg' 
import NavigationLinks from './ui/links/NavigationLinks';
import ExternalLink from './ui/links/ExternalLink';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className='w-full flex justify-between items-center bg-gray-600 py-5 px-10'>
            <Link to={"/"}>
                <img src={LogoReverse} alt="" />
            </Link>
            <div className='flex flex-col flex-wrap max-h-20 gap-x-5 gap-y-2 text-gray-300 text-sm font-normal'>
                <NavigationLinks textColor='text-gray-300' textSize='text-sm' fontWeight='font-normal' hoverStyle='underline'/>
            </div>
            <div className='flex flex-col flex-wrap max-h-20 gap-x-5 gap-y-2 text-gray-300 text-sm font-normal'>
                <ExternalLink label={t("footer_link_1")}/>
                <ExternalLink label={t("footer_link_2")}/>
                <ExternalLink label={t("footer_link_3")}/>
            </div>
            <p className='text-gray-300 self-end'>{t("rights_reserved")}</p>
        </footer>
    );
};

export default Footer