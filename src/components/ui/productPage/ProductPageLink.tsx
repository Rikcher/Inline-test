import { NavLink, useLocation } from 'react-router-dom'

interface ProductPageLinkProps {
    label: string;
    path: string;
}

const ProductPageLink: React.FC<ProductPageLinkProps> = ({ label, path }) => {
    const location = useLocation();
    const isActive = location.pathname.endsWith(`/${path}`)

    return (
        <div className='relative'>   
            <NavLink className={`text-base ${isActive ? "font-semibold" : "font-medium"} border`} to={path}>{label}</NavLink>
            {isActive && <div className="w-[130%] h-1.5 bg-main absolute rounded-full -left-[15%] -bottom-5"></div>}
        </div>
    )
}

export default ProductPageLink