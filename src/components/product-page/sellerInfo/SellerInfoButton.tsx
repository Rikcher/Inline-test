import { Link } from "react-router-dom";

interface SellerInfoButtonProps {
    label: string;
}

const SellerInfoButton: React.FC<SellerInfoButtonProps> = ({ label }) => {
    return (
        <Link to ="#" className='text-center border font-semibold lg:font-medium border-solid text-[0.9375rem] lg:text-sm border-gray-superlight py-2 lg:py-3 px-6 lg:px-10 rounded-[5px] transition-all duration-200 ease-in-out hover:bg-main hover:text-white'>{label}</Link>
    )
}

export default SellerInfoButton