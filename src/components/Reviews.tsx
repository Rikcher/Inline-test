import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import InputField from './ui/form/InputField'
import SubmitButton from './ui/form/SubmitButton'
import { useTranslation } from 'react-i18next'

const Reviews = () => {
    const methods = useForm() 

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
    }

    const { t } = useTranslation()


    return (
        <div className='flex flex-col'>
            <p className='mb-6 max-w-[32.75rem]'>{t("reviews_title")}</p>
            <FormProvider {...methods}>
                <form className='flex flex-col max-w-[60rem]' onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className='flex gap-10 mb-5'>
                        <InputField name='name' label={t("name")}/>
                        <InputField name='email' label={t("email")}/>
                        <InputField name='phone' label={t("phone")}/>
                    </div>
                    <div className='mb-8'>
                        <InputField name='message' label={t("comment")} isTextArea/>
                    </div>
                    <SubmitButton label={t("reviews_submit_button")}/>
                </form>
            </FormProvider>
        </div>
    )
}

export default Reviews