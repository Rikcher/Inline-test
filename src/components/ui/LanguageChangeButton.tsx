import { useState } from 'react';
import { getLastSelectedLanguage } from '../../i18n';
import { Languages } from '../../constants';
import i18n from '../../i18n';

const LanguageChangeButton = () => {
    const lastSelectedLanguage = getLastSelectedLanguage()
    const [selectedLanguage, setSelectedLanguage] = useState(lastSelectedLanguage)

    const handleLanguageChange = (langCode: Languages) => {
        i18n.changeLanguage(langCode); 
        localStorage.setItem('lastSelectedLanguage', langCode); 
        setSelectedLanguage(langCode); 
    };

    return (
        <div className='flex items-center gap-1'>
            <button
            className={`text-xl font-semibold transition-text duration-300 ease-in-out ${selectedLanguage === "ru" ? "text-main" : ""}`} 
            onClick={(e) => handleLanguageChange(e.currentTarget.value as Languages)} 
            value="ru">
                RU
            </button>
            <span className='text-xl font-semibold'> / </span>
            <button
                className={`text-xl font-semibold transition-text duration-300 ease-in-out ${selectedLanguage === "en" ? "text-main" : ""}`}
                onClick={(e) => handleLanguageChange(e.currentTarget.getAttribute('value') as Languages)}
                value="en"
            >
                EN
            </button>
        </div>
    )
}

export default LanguageChangeButton