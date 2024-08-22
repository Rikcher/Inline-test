import { Product } from "../../../contexts/CartContext"

interface ProductPricePropsMobile {
    product: Product;
}

const ProductPriceMobile: React.FC<ProductPricePropsMobile> = ({ product }) => {
    return (
        <div className="flex gap-1 items-baseline -mt-1">
            <span className="text-lg text-gray-superdark font-bold">{`${product.price} ₽`}</span>
            <span className="text-[#4D4B4B] text-[0.8125rem]">/</span>
            <span className="text-[#4D4B4B] text-[0.8125rem]">{product.pricePerUnit}</span>
        </div>
    )
}

export default ProductPriceMobile