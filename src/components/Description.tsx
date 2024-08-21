import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CarContext';
import ProductSpecifications from './ui/productPage/ProductSpecifications';
import ProductNutritions from './ui/productPage/ProductNutritions';
import ProductStorageConditions from './ui/productPage/ProductStorageConditions';
import ProductCard from './ui/productCard/ProductCard';
import { useTranslation } from 'react-i18next';

const Description = () => {
    const { productId } = useParams();
    const { products } = useContext(CartContext)!
    const product = products.find((product) => product.id === productId);
    const { t } = useTranslation()

    return (
        <div className='flex flex-col'>
            <p className='mb-6'>{product?.description}</p>
            <p className='mb-8'>{product?.secondDescription}</p>
            <div className='flex flex-wrap gap-x-24 gap-y-8 max-w-full mb-14'>
                <ProductSpecifications product={product}/>
                <ProductNutritions product={product}/>
                <ProductStorageConditions product={product}/>
            </div>
            <h2 className='text-[22px] font-medium mb-8'>{t("also_with_this_product")}</h2>
            <div className="flex flex-wrap gap-10">   
                {products.map(productItem => (
                    product?.id !== productItem.id && <ProductCard product={productItem}/>
                ))}
            </div>
        </div>
    )
}

export default Description