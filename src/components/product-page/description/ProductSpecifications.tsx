import { useTranslation } from "react-i18next";
import { Product } from "../../../contexts/CarContext"
import ProductDescriptionTitle from "./ProductDescriptionTitle";
import ProductDescriptionInfo from "./ProductDescriptionInfo";

interface ProductSpecificationsProps {
    product: Product | undefined;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col w-[30rem]'>
            <ProductDescriptionTitle label={t("specifications")}/>
            <div className='flex flex-col gap-4'>
                {product?.specifications.map((specification, index) => (
                    <ProductDescriptionInfo key={index} label={specification.label} value={specification.value}/>
                ))}
            </div>
        </div>
    )
}

export default ProductSpecifications