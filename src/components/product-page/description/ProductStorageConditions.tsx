import { useTranslation } from "react-i18next";
import { Product } from "../../../contexts/CarContext"
import ProductDescriptionTitle from "./ProductDescriptionTitle";
import ProductDescriptionInfo from "./ProductDescriptionInfo";

interface ProductStorageConditionsProps {
    product: Product | undefined;
}

const ProductStorageConditions: React.FC<ProductStorageConditionsProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col w-[30rem]'>
            <ProductDescriptionTitle label={t("storageConditions")}/>
            <div className='flex flex-col gap-4'>
                {product?.storageConditions.map((storageCondition, index) => (
                    <ProductDescriptionInfo key={index} label={storageCondition.label} value={storageCondition.value}/>
                ))}
            </div>
        </div>
    )
}

export default ProductStorageConditions