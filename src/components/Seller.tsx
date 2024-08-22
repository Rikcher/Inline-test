import SellerImage from '/src/assets/SellerImage.png'
import SellerInfoButton from './product-page/sellerInfo/SellerInfoButton'
import SellerDescription from './product-page/sellerInfo/SellerDescription'
import { useTranslation } from 'react-i18next'
import useLargeScreen from '../hooks/useLargeScreen'
import { CartContext } from '../contexts/CarContext'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'

const Seller = () => {
    const { t } = useTranslation()
    const {isLargeScreen, isSmallestScreen} = useLargeScreen()
    const { productId } = useParams();
    const { products } = useContext(CartContext)!
    // Если честно, не хотелось использовать product.name, потому что там неверное склонение, при этом хотелось 1 в 1, как в дизайне. Был очевидный варинат добавить новый key с верным значением, но мне было лень, поэтому решил оставить такой подход
    const supplierName = products.find((product) => product.id === productId)?.specifications[1].value.split(": ").pop()?.trim();

    return (
        <div className='flex flex-col lg:flex-row lg:gap-14 xl:gap-40 mx-auto'>
            <div className='flex flex-col max-w-[32rem]'>
                {isLargeScreen ? (
                    // Тут так же, как и в случае с именем продавца, разное описание должно вытягиваться с бека, но в моём случае я просто пропишу тут вручную для простоты
                    <>
                    <SellerDescription text='Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с обычными. Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.'/>
                    <SellerDescription text='Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов, маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской закуски Капрезе.'/>
                    </>
                ) : (
                    <>
                    <SellerDescription text='Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с обычными.'/>
                    <SellerDescription text='Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.'/>
                    </>
                )}
            </div>
            <div className='flex flex-col'>
                {!isLargeScreen && <p className='text-[0.9375] font-semibold mb-4'>{supplierName}</p>}
                <div className='lg:max-h-64 overflow-hidden mb-6 rounded-[5px] lg:w-[23.5rem]'>
                    <img className='bg-cover w-full bg-auto bg-no-repeat' src={SellerImage} alt="" />
                </div>
                <div className={`flex ${isSmallestScreen && "flex-col gap-5"} justify-between w-full`}>
                    <SellerInfoButton label={t("certificates")}/>
                    <SellerInfoButton label={t("about_supplier")}/>
                </div>
            </div>
        </div>
    )
}

export default Seller