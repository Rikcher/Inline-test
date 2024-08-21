import { useFormContext } from "react-hook-form";

interface InputFieldProps {
    name: string;
    label: string;
    isTextArea?: boolean;
    styles?: string;
}

const InputField: React.FC<InputFieldProps> = ({ name ,label, isTextArea, styles }) => {
    const { 
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <div className='flex flex-col grow'>
            <label className="mb-2 ml-1 font-medium" htmlFor={name}>{label}</label>
            {isTextArea ? (
                <textarea rows={4} {...register(name)} className={`border border-solid border-gray-superdark px-4 py-2 rounded-md ${styles}`}></textarea>
            ) : (
                <input {...register(name)} className={`border border-solid border-gray-superdark px-4 py-2 rounded-md ${styles}`} type="text" />
            )}
        </div>
    )
}

export default InputField