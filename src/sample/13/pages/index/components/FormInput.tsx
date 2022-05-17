import React from "react";
import {FormData} from "./FormData";

export type Props = {
    formData: FormData
    show: boolean
    onNameChange: (userName: string) => void
    onInputPasswordChange: (password: string) => void
    onButtonClick?: () => void
}

export default function FormInput(p: Readonly<Props>) {
    if (!p.show) {
        return <></>
    }

    const buttonEnable = () => {
        if (p.formData.name === "") {
            return false
        }

        if (p.formData.password === "") {
            return false
        }

        return true
    }

    return (
        <>
            <form>
                <p>
                    Name: <input type="text" value={p.formData.name} onChange={e => p.onNameChange?.(e.target.value)}/>
                </p>
                <p>
                    Password: <input type="password" value={p.formData.password}
                                     onChange={e => p.onInputPasswordChange?.(e.target.value)}/>
                </p>
                <p>
                    <button onClick={p.onButtonClick} disabled={!buttonEnable()}>OK</button>
                </p>
            </form>
        </>
    )
}