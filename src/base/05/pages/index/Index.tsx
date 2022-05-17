import React from 'react'
import Main from "../../../../components/layout/Main"
import Agree from "../../components/Agree";

export default function Index() {
    const handleClick = () => {
        alert("ok")
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                {/* TODO: children で「同意する」を渡す */}
                <Agree/>
            </p>
            <p>
                <button onClick={handleClick} disabled={true}>実行</button>
            </p>
        </Main>
    )
}