interface ProductDescriptionInfoProps {
    label: string;
    value: string;
}

const ProductDescriptionInfo: React.FC<ProductDescriptionInfoProps> = ({ label, value }) => {
    return (
        <div className='flex justify-between border-b border-solid border-gray-superlight border-opacity-50 pb-0.5'>
            <span className='text-xs'>
                {label}
            </span>
            <span className='text-xs'>
                {value}
            </span>
        </div>
    )
}

export default ProductDescriptionInfo