import React from "react";
import Agree from "./Agree";

export type Props = {
    children?: React.ReactNode
    agreeLabel?: string
    onClick?: () => void
    agree?: boolean
    onAgreeChange?: (_: boolean) => void
}

export default function ButtonWithAgree(p: Readonly<Props>) {
    return (
        <>
            <p>
                <Agree checked={p.agree} onChange={p.onAgreeChange}>
                    {p.agreeLabel ?? "同意する"}
                </Agree>
            </p>
            <p>
                <button onClick={p.onClick} disabled={!p.agree}>
                    {p.children ?? "実行"}
                </button>
            </p>
        </>
    )
}