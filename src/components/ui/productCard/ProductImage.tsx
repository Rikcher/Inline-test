import { Link } from "react-router-dom";
import { Product } from "../../../contexts/CarContext"

interface ProductImageProps {
    product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
    return (
        <Link className="group overflow-hidden rounded-t-[10px]"  to={product.id}>
            <img className="h-[14.625rem] w-full bg-contain bg-center bg-no-repeat transition-scale duration-300 ease-in-out group-hover:scale-110" src={product.image} alt="" />
        </Link>
    )
}

export default ProductImage