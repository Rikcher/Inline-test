import { LINKS } from '../../constants'
import CustomLink from './CustomLink'

interface NavigationLinksProps {
    textColor?: string;
    textSize?: string;
    fontWeight?: string;
    hoverStyle: "custom" | "underline";
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ textColor, textSize, fontWeight, hoverStyle }) => {
    return (
        LINKS.map((link) => (
            <CustomLink label={link.label} path={link.path} textColor={textColor} textSize={textSize} fontWeight={fontWeight} hoverStyle={hoverStyle}/>
        ))
    )
}

export default NavigationLinks