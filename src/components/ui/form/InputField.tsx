import { useFormContext } from "react-hook-form";

interface InputFieldProps {
    name: string;
    label: string;
    isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ name ,label, isTextArea }) => {
    const { 
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <div className='flex flex-col grow'>
            <label className="mb-2 ml-1 font-medium" htmlFor={name}>{label}</label>
            {isTextArea ? (
                <textarea rows={4} {...register(name, {required: "Please fill in this field"})} className={`border border-solid border-gray-superdark px-4 py-2 rounded-md ${errors[name] ? "border-rose-500" : "border-gray-superdark"}`}></textarea>
            ) : (
                <input {...register(name, {required: "Please fill in this field"})} className={`border border-solid px-4 py-2 rounded-md ${errors[name] ? "border-rose-500" : "border-gray-superdark"}`} type="text" />
            )}
            {errors[name] && <p className="text-rose-500 mt-1">{`${errors[name].message}`}</p>}
        </div>
    )
}

export default InputField