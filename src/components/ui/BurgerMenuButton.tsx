import { useNavbar } from "../../contexts/NavbarContext";

const BurgerMenuButton = () => {
    const { isMenuOpen, setIsMenuOpen } = useNavbar();

    return (
        <button 
        className="right-6 z-30 hamburger-menu lg:hidden flex flex-col justify-between h-11 w-9 px-1 py-3 aspect-square cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`rounded-full w-full h-0.5 bg-black origin-top-right transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-42" : ""}`}></span>
            <span className={`rounded-full w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`rounded-full w-full h-0.5 bg-black origin-bottom-right transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-42" : ""}`}></span>
        </button>
    )
}

export default BurgerMenuButton