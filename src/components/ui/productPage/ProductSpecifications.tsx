import { useTranslation } from "react-i18next";
import { Product } from "../../../contexts/CarContext"

interface ProductSpecificationsProps {
    product: Product | undefined;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col w-[30rem]'>
            <h3 className='mb-5 font-medium'>{t("specifications")}</h3>
            <div className='flex flex-col gap-4'>
                {product?.specifications.map(specification => (
                    <div className='flex justify-between border-b border-solid border-gray-superlight border-opacity-50'>
                        <span className='text-xs'>
                            {specification.label}
                        </span>
                        <span className='text-xs'>
                            {specification.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSpecifications