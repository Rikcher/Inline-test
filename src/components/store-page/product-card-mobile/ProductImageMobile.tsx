import { Link } from "react-router-dom";
import { Product } from "../../../contexts/CartContext"

interface ProductImageMobileProps {
    product: Product;
}

const ProductImageMobile: React.FC<ProductImageMobileProps> = ({ product }) => {
    return (
        <Link className="group overflow-hidden rounded-t-[10px] relative"  to={`/store/${product.id}`}>
            <img className="h-24 w-24 rounded bg-contain bg-center bg-no-repeat transition-scale duration-300 ease-in-out group-hover:scale-110" src={product.image} alt="" />
        </Link>
    )
}

export default ProductImageMobile