import { useTranslation } from "react-i18next";
import { CartContext } from "../contexts/CarContext";
import { useContext } from "react";
import ProductCard from "../components/ui/productCard/ProductCard";

const Store = () => {
    const { t } = useTranslation()
    const { products } = useContext(CartContext)!

    return (
        <div className="felx felx-col w-full">
            <h1 className="text-3xl font-bold mb-10">{t("title")}</h1>
            <div className="flex flex-wrap gap-10">
                {products.map(product => (
                    <ProductCard product={product}/>
                ))}
                {products.map(product => (
                    <ProductCard product={product}/>
                ))}
                {products.map(product => (
                    <ProductCard product={product}/>
                ))}
                {products.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Store;

