import React, {useState} from 'react'
import Main from "../../../../components/layout/Main"

export default function Index() {
    const [agree, setAgree] = useState(false)

    const handleClick = () => {
        alert("ok")
    }

    const handleAgreeChanged = () => {
        setAgree(!agree)
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                <input type="checkbox" id="checkAgree" checked={agree} onChange={handleAgreeChanged}/>
                <label htmlFor="checkAgree">同意する</label>
            </p>
            <p>
                <button onClick={handleClick} disabled={!agree}>実行</button>
            </p>
        </Main>
    )
}