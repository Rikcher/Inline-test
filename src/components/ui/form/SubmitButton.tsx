interface SubmitButtonProps {
    label: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    return (
        <button className="mx-auto sm:mx-0 px-5 py-3 rounded-md flex justify-center items-center max-w-48 text-base font-semibold text-white bg-main hover:bg-main-dark" type='submit'>{label}</button>
    )
}

export default SubmitButton