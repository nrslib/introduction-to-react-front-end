import React from 'react'
import Main from "../../../../components/layout/Main"

export default function Index() {
    const handleClick = () => {
        alert("ok")
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                {/* TODO: チェックボックスを追加する */}
            </p>
            <p>
                <button onClick={handleClick}>実行</button>
            </p>
        </Main>
    )
}