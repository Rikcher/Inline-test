import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

interface CustomLinkProps {
    label: string;
    path: string;
    textColor?: string;
    textSize?: string;
    fontWeight?: string;
    hoverStyle: "custom" | "underline";
    closeMenu?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ label, path, textColor, textSize, fontWeight, hoverStyle, closeMenu }) => {
    const { t } = useTranslation();
    const cartContext = useContext(CartContext);
    const cartTotal = cartContext?.itemsCount;

    return (
        <div className='relative group' onClick={closeMenu}>
            <Link 
            className={`relative ${textColor} ${textSize ? textSize : "text-xl"} ${fontWeight ? fontWeight : "font-semibold"} ${hoverStyle === "underline" && "group-hover:underline"}`} 
            // style={{color: ""}} 
            to={path}>
                {label}
                {label === t("cart") && cartTotal !== 0 && hoverStyle === "custom" &&  
                    <span className="absolute -top-1 -right-3 bg-main-light rounded-full w-4 h-4 text-xs flex justify-center items-center">
                        {cartTotal}
                    </span>
                }
            </Link>
            {hoverStyle === "custom" && <div className='absolute -bottom-1.5 transition-w duration-300 ease-in-out w-0 h-0.5 bg-main group-hover:w-full'></div>}
        </div>
    )
}

export default CustomLink