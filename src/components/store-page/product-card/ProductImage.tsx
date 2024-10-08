import { Link } from "react-router-dom";
import { Product } from "../../../contexts/CartContext"

interface ProductImageProps {
    product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
    return (
        <Link className="group overflow-hidden rounded-t-[10px] relative"  to={`/store/${product.id}`}>
            <img className="h-[14.625rem] w-full bg-contain bg-center bg-no-repeat transition-scale duration-300 ease-in-out group-hover:scale-110" src={product.image} alt="" />
            {/* Вообще должно быть кнопкой, но для простоты оставлю просто ховер эффект */}
            <svg className="absolute group/heart top-4 right-4 hover:fill-rose-600" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover/heart:stroke-rose-600" d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" stroke="white"/>
            </svg>
        </Link>
    )
}

export default ProductImage