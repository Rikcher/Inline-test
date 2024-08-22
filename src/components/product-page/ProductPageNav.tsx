import { useTranslation } from "react-i18next"
import ProductPageLink from "./ProductPageLink"

const ProductPageNav = () => {
    const { t } = useTranslation()

    return (
        <nav className="w-full flex justify-between sm:justify-center sm:gap-24 lg:pb-5 border-b border-solid border-gray-superlight mb-6 lg:mb-14">
            <ProductPageLink label={t("description")} path="description"/>
            <ProductPageLink label={t("reviews")} path="reviews"/>
            <ProductPageLink label={t("seller")} path="seller"/>
        </nav>
    )
}

export default ProductPageNav