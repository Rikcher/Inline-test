import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import InputField from './ui/form/InputField'
import SubmitButton from './ui/form/SubmitButton'

const Reviews = () => {
    const methods = useForm() 

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
    }


    return (
        <div className='flex flex-col'>
            <p className='mb-6 max-w-[32.75rem]'>Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом указываете нам на зоны роста. Мы правда, читаем все отзывы.</p>
            <FormProvider {...methods}>
                <form className='flex flex-col max-w-[60rem]' onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className='flex gap-10 mb-5'>
                        <InputField name='name' label='Имя'/>
                        <InputField name='email' label='Почта'/>
                        <InputField name='phone' label='Телефон'/>
                    </div>
                    <InputField name='message' styles='mb-8' label='Комментарий' isTextArea/>
                    <SubmitButton label='Оставить отзыв'/>
                </form>
            </FormProvider>
        </div>
    )
}

export default Reviews