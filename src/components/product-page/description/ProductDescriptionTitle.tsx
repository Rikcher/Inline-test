interface ProductDescriptionTitleProps {
    label: string;
}

const ProductDescriptionTitle: React.FC<ProductDescriptionTitleProps> = ({ label }) => {
    return (
        <h3 className='mb-5 font-medium'>{label}</h3>
    )
}

export default ProductDescriptionTitle