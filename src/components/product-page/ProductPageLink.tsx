import { NavLink, useLocation } from 'react-router-dom'

interface ProductPageLinkProps {
    label: string;
    path: string;
}

const ProductPageLink: React.FC<ProductPageLinkProps> = ({ label, path }) => {
    const location = useLocation();
    const isActive = location.pathname.endsWith(`/${path}`)

    return (
        <div className="relative group">   
            <NavLink className={`text-base ${isActive ? "font-bold lg:font-semibold" : "font-medium"} ${!isActive && "group-hover:text-main border"}`} to={path}>{label}</NavLink>
            {isActive && <div className="w-full lg:w-[130%] h-[3px] lg:h-1.5 bg-main absolute rounded-full lg:-left-[15%] -bottom-0.5 lg:-bottom-5"></div>}
        </div>
    )
}

export default ProductPageLink