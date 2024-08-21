import { useTranslation } from "react-i18next";
import { Product } from "../../../contexts/CarContext"

interface ProductNutritionsProps {
    product: Product | undefined;
}

const ProductNutritions: React.FC<ProductNutritionsProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col w-[30rem]'>
            <h3 className='mb-5 font-medium'>{t("nutritions")}</h3>
            <div className='flex flex-col gap-4'>
                {product?.nutritions.map(nutrition => (
                    <div className='flex justify-between border-b border-solid border-gray-superlight border-opacity-50'>
                        <span className='text-xs'>
                            {nutrition.label}
                        </span>
                        <span className='text-xs'>
                            {nutrition.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductNutritions