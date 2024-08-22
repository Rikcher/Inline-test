import BurgerMenuButton from "../ui/BurgerMenuButton"
import NavigationLinks from "../ui/website-navigation/NavigationLinks"
import { useNavbar } from "../../contexts/NavbarContext"

const MobileNavbar = () => {
    const { isMenuOpen, closeMenu } = useNavbar();

    return (
        <>
            <BurgerMenuButton/>
            <div className={`${isMenuOpen ? "opacity-100 top-0 no-doc-scroll" : "opacity-0 -top-80 pointer-events-none"} transition-all duration-300 ease-in-out h-screen w-screen fixed inset-0 bg-white pt-32 pb-10 px-6 z-20`}>
                <div className='flex flex-col gap-8 border-b border-solid border-[#2B2D3A] pb-12 mb-9'>
                    <NavigationLinks closeMenu={closeMenu} hoverStyle='underline'/>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar