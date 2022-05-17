import React from "react";

// TODO: チェック状態のパラメータを定義して利用する
// TODO: input の onChange イベントハンドラを定義して利用する
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