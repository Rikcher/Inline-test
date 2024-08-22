import { Product } from "../../../contexts/CartContext"
import ProductImageMobile from "../product-card-mobile/ProductImageMobile";
import ProductSellerInfoMobile from "../product-card-mobile/ProductSellerInfoMobile";
import ProductPriceMobile from "../product-card-mobile/ProductPriceMobile";
import ProductButtonMobile from "./ProductButtonMobile";


interface ProductCardMobileProps {
    product: Product;
}

const ProductCardMobile: React.FC<ProductCardMobileProps> = ({ product }) => {
    return (
        <div className="w-72 flex flex-col gap-2 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] m-1 p-5">
            <div className="flex gap-1">
                <ProductImageMobile product={product}/>
                <div className="flex flex-col grow">
                    <ProductSellerInfoMobile product={product}/>
                    <div className="self-end">
                        <ProductPriceMobile product={product}/>
                    </div>
                </div>
            </div>
            <div className="self-end">
                <ProductButtonMobile label="В корзину"/>
            </div>
        </div> 
    )
}

export default ProductCardMobile