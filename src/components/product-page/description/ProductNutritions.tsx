import { useTranslation } from "react-i18next";
import { Product } from "../../../contexts/CarContext"
import ProductDescriptionTitle from "./ProductDescriptionTitle";
import ProductDescriptionInfo from "./ProductDescriptionInfo";

interface ProductNutritionsProps {
    product: Product | undefined;
}

const ProductNutritions: React.FC<ProductNutritionsProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col w-[30rem]'>
            <ProductDescriptionTitle label={t("nutritions")}/>
            <div className='flex flex-col gap-3 lg:gap-4'>
                {product?.nutritions.map((nutrition, index) => (
                    <ProductDescriptionInfo key={index} label={nutrition.label} value={nutrition.value}/>
                ))}
            </div>
        </div>
    )
}

export default ProductNutritions