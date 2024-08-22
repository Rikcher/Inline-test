import { Product } from "../../../contexts/CarContext"
import ProductImage from "./ProductImage";
import ProductSellerInfo from "./ProductSellerInfo";
import ProductPrice from "./ProductPrice";
import ProductRatings from "./ProductRatings";
import ProductButton from "./ProductButton";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="w-[17rem] rounded-[10px] flex flex-col border border-solid border-gray-300">
            <ProductImage product={product}/>
            <div className="flex justify-between pt-3.5 pb-5">
                <div className="flex flex-col justify-between px-3">
                    <ProductSellerInfo product={product}/>
                    <div className="flex flex-col">
                        <ProductPrice product={product}/>
                        <ProductRatings product={product}/>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <ProductButton />
                </div>
            </div>
        </div>
    )
}

export default ProductCard