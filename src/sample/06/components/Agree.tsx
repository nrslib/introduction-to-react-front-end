import React from "react";

export type Props = {
    children?: React.ReactNode
    checked?: boolean
    onChange?: (_: boolean) => void
}

export default function Agree(p: Readonly<Props>) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        p.onChange?.(event.target.checked)
    };

    return (
        <>
            <input type="checkbox" id="checkAgree" checked={p.checked} onChange={handleChange}/>
            <label htmlFor="checkAgree">{p.children}</label>
        </>
    )
}