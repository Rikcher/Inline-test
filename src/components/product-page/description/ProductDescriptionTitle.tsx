interface ProductDescriptionTitleProps {
    label: string;
}

const ProductDescriptionTitle: React.FC<ProductDescriptionTitleProps> = ({ label }) => {
    return (
        <h3 className='mb-4 lg:mb-5 text-[0.9375rem] lg:text-base font-semibold lg:font-medium'>{label}</h3>
    )
}

export default ProductDescriptionTitle