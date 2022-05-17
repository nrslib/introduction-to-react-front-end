import React from "react";

export type Props = {
    show: boolean
    onNextClick?: () => void
}

export default function FormComplete(p: Readonly<Props>) {
    if (!p.show) {
        return <></>
    }

    return (
        <>
            <p>
                Completed
            </p>
            <p>
                <button onClick={p.onNextClick}>Next</button>
            </p>
        </>
    )
}