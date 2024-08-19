import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CarContext";
import { useContext } from "react";

interface CustomLinkProps {
    label: string;
    path: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ label, path }) => {
    const cartContext = useContext(CartContext);
    const cartTotal = cartContext?.getCartTotal();

    return (
        <div className='relative group'>
            <Link className='relative text-xl font-semibold' to={path}>
                {label}
                {label === "Cart" && cartTotal !== 0 && 
                    <span className="absolute -top-1 -right-3 bg-main-light rounded-full w-4 h-4 text-xs flex justify-center items-center">
                        {cartTotal}
                    </span>
                }
            </Link>
            <div className='absolute -bottom-1.5 transition-w duration-300 ease-in-out w-0 h-0.5 bg-main group-hover:w-full'></div>
        </div>
    )
}

export default CustomLink