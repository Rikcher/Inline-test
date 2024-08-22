interface ExternalLinkProps {
    label: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ label }) => {
    return (
        <a className='hover:underline' target='_blank' href="#">{label}</a>
    )
}

export default ExternalLink