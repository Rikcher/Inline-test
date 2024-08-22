import LanguageChangeButton from '../ui/LanguageChangeButton';
import NavigationLinks from '../ui/website-navigation/NavigationLinks';

const Navbar = () => {
    return (
        <div className='flex gap-10'>
            <LanguageChangeButton/>
            <NavigationLinks hoverStyle='custom'/>
        </div>
    )
}

export default Navbar