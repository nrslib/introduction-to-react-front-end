import React, {useState} from "react";
import Main from "../../../../components/layout/Main";
import Form, {Step} from "./components/Form";
import {FormData} from "./components/FormData";
import usePostForm from "./hooks/usePostForm";

export default function Index() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        password: ""
    })
    const [step, setStep] = useState<Step>("input")
    const [postForm, loading] = usePostForm()

    const handleFormDataChange = (formData: FormData) => {
        setFormData(formData)
    }

    const handleConfirmNextClick = () => {
        postForm()
            .then(() => {
                setFormData({
                    name: "",
                    password: ""
                })
                setStep("complete")
            })
    }

    return (
        <Main>
            <h1>Index</h1>

            <h2>Form ({step})</h2>
            <Form step={step}
                  loading={loading}
                  formData={formData}
                  onFormDataChange={handleFormDataChange}
                  onInputNextClick={() => setStep("confirm")}
                  onConfirmBackClick={() => setStep("input")}
                  onConfirmNextClick={handleConfirmNextClick}
                  onCompleteNextClick={() => setStep("input")}
            />
        </Main>
    )
}