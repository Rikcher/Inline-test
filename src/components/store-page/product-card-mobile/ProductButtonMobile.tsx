interface ProductButtonMobileProps {
    label: string;
}

const ProductButtonMobile: React.FC<ProductButtonMobileProps> = ({ label }) => {
    return (
        <button className="border border-solid border-[#DEDEDE] rounded-[5px] py-3 px-4">
            <div className="text-main text-sm gap-5 font-semibold flex items-center">
                {label}
                <div className="flex gap-1">
                    <span className="material-symbols-outlined text-main">
                    add
                    </span>
                    <span className="material-symbols-outlined text-main">
                    shopping_cart
                    </span>
                </div>
            </div>
        </button>
    )
}

export default ProductButtonMobile