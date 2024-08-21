import { Product } from "../../../contexts/CarContext"

interface ProductPriceProps {
    product: Product;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ product }) => {
    return (
        <div className="flex gap-1 items-baseline mb-3">
            <span className="text-xl text-gray-superdark font-semibold">{`${product.price} ₽`}</span>
            <span className="text-xs text-gray-superlight">/</span>
            <span className="text-xs text-gray-superlight">{product.pricePerUnit}</span>
        </div>
    )
}

export default ProductPrice