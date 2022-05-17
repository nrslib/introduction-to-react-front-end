import React from "react";
import {FormData} from "./FormData";

export type Props = {
    show: boolean
    loading?: boolean
    formData: FormData
    onBackClick?: () => void
    onNextClick?: () => void
}

export default function FormConfirm(p: Readonly<Props>) {
    if (!p.show) {
        return <></>
    }

    return (
        <>
            <p>
                Name: {p.formData.name}
            </p>
            <p>
                Password: ********
            </p>
            <p>
                <button onClick={p.onBackClick} disabled={p.loading}>Back</button>
                <button onClick={p.onNextClick} disabled={p.loading}>Next</button>
            </p>
        </>
    )
}