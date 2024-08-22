import { useTranslation } from "react-i18next";
import { CartContext } from "../contexts/CarContext";
import { useContext } from "react";
import ProductCard from "../components/store-page/product-card/ProductCard";

const Store = () => {
    const { t } = useTranslation()
    const { products } = useContext(CartContext)!

    return (
        <div className="flex items-center lg:items-start flex-col w-full">
            <h1 className="text-3xl font-bold mb-10">{t("title")}</h1>
            <div className="flex justify-center lg:justify-start flex-wrap gap-10">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Store;

