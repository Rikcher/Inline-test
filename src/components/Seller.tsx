import SellerImage from '/src/assets/SellerImage.png'

const Seller = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col max-w-[32rem]'>
                <p className='mb-8'>Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с обычными. Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.</p>
                <p className='mb-8'>Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов, маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской закуски Капрезе.</p>
            </div>
            <div className='flex flex-col'>
                <img src={SellerImage} alt="" />
                <div className='flex justify-between w-full px-2'>
                    <button className='border border-solid border-gray-superlight py-3 px-10 rounded-[5px]'>Сертификаты</button>
                    <button className='border border-solid border-gray-superlight py-3 px-10 rounded-[5px]'>О поставщике</button>
                </div>
            </div>
        </div>
    )
}

export default Seller