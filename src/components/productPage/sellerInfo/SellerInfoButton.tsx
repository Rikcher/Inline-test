import { Link } from "react-router-dom";

interface SellerInfoButtonProps {
    label: string;
}

const SellerInfoButton: React.FC<SellerInfoButtonProps> = ({ label }) => {
    return (
        <Link to ="#" className='border border-solid border-gray-superlight py-3 px-10 rounded-[5px] transition-all duration-200 ease-in-out hover:bg-main hover:text-white'>{label}</Link>
    )
}

export default SellerInfoButton