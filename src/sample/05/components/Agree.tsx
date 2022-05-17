import React from "react";

export type Props = {
    children?: React.ReactNode
}

export default function Agree(p: Readonly<Props>) {
    return (
        <>
            <input type="checkbox" id="checkAgree"/>
            <label htmlFor="checkAgree">{p.children}</label>
        </>
    )
}