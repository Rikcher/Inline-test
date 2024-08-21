import { useTranslation } from "react-i18next";
import { Product } from "../../../contexts/CarContext"

interface ProductStorageConditionsProps {
    product: Product | undefined;
}

const ProductStorageConditions: React.FC<ProductStorageConditionsProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col w-[30rem]'>
            <h3 className='mb-5 font-medium'>{t("storageConditions")}</h3>
            <div className='flex flex-col gap-4'>
                {product?.storageConditions.map(storageCondition => (
                    <div className='flex justify-between border-b border-solid border-gray-superlight border-opacity-50'>
                        <span className='text-xs'>
                            {storageCondition.label}
                        </span>
                        <span className='text-xs'>
                            {storageCondition.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductStorageConditions