import FormInput from "./FormInput";
import {FormData} from "./FormData";
import FormConfirm from "./FormConfirm";
import FormComplete from "./FormComplete";

export type Props = {
    step: Step
    loading?: boolean
    formData: FormData
    onInputNextClick?: () => void
    onFormDataChange?: (_: FormData) => void
    onConfirmBackClick?: () => void
    onConfirmNextClick?: () => void
    onCompleteNextClick?: () => void
}

export type Step = "input" | "confirm" | "complete"

export default function Form(p: Readonly<Props>) {
    const onChange = (formData: FormData) => {
        p.onFormDataChange?.(formData)
    }

    const handleUserNameChange = (value: string) => {
        const data: FormData = {
            ...p.formData,
            name: value
        }

        onChange(data)
    }

    const handlePasswordChange = (value: string) => {
        const data: FormData = {
            ...p.formData,
            password: value
        }

        onChange(data)
    }

    return (
        <>
            <FormInput show={p.step === "input"}
                       formData={p.formData}
                       onNameChange={handleUserNameChange}
                       onInputPasswordChange={handlePasswordChange}
                       onButtonClick={p.onInputNextClick}
            />
            <FormConfirm show={p.step === "confirm"}
                         loading={p.loading}
                         formData={p.formData}
                         onBackClick={p.onConfirmBackClick}
                         onNextClick={p.onConfirmNextClick}
            />
            <FormComplete show={p.step === "complete"}
                          onNextClick={p.onCompleteNextClick}
            />
        </>
    )
}