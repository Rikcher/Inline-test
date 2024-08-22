interface SellerDescriptionProps {
    text: string;
}

const SellerDescription: React.FC<SellerDescriptionProps> = ({ text }) => {
    return (
        <p className='mb-4 text-justify lg:text-left lg:mb-8'>{text}</p>
    )
}

export default SellerDescription