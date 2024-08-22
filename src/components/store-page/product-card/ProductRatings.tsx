import { Product } from "../../../contexts/CartContext"

interface ProductRatingsProps {
    product: Product;
}

const ProductRatings: React.FC<ProductRatingsProps> = ({product}) => {
    return (
        <div className="flex"> {/* Тоже может быть ссылкой на отзывы продута */}
            {[...Array(product.rating)].map((_,index) => (
                <span key={index} className="material-symbols-outlined text-yellow-400">
                star
                </span>
            ))}
        </div>
    )
}

export default ProductRatings