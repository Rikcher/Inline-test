import { useContext, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import ProductSpecifications from './product-page/description/ProductSpecifications';
import ProductNutritions from './product-page/description/ProductNutritions';
import ProductStorageConditions from './product-page/description/ProductStorageConditions';
import ProductCard from './store-page/product-card/ProductCard';
import ProductCardMobile from './store-page/product-card-mobile/ProductCardMobile';
import { useTranslation } from 'react-i18next';
import useLargeScreen from '../hooks/useLargeScreen';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Description = () => {
    const { productId } = useParams();
    const { products } = useContext(CartContext)!
    const product = products.find((product) => product.id === productId);
    const { t } = useTranslation()
    const { isLargeScreen } = useLargeScreen();

    const swiperRef = useRef(null);

    return (
        <div className='flex flex-col'>
            <p className='mb-6'>{product?.description}</p>
            <p className='mb-8'>{product?.secondDescription}</p>
            <div className='flex flex-wrap gap-x-24 gap-y-4 lg:gap-y-8 max-w-full mb-12 lg:mb-14'>
                <ProductSpecifications product={product}/>
                <ProductNutritions product={product}/>
                <ProductStorageConditions product={product}/>
            </div>
            <h2 className='text-[22px] font-medium mb-6 lg:mb-8'>{t("also_with_this_product")}</h2>
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                ref={swiperRef}
            >
                {products.map(productItem => (
                    product?.id !== productItem.id && 
                    <SwiperSlide key={productItem.id}>
                        {isLargeScreen ? (
                            <ProductCard product={productItem}/>
                        ) : (
                            <ProductCardMobile product={productItem}/>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Description