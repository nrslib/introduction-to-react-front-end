import React, {useState} from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import Link from "../../components/Link";

export default function Other() {
    const [agree, setAgree] = useState(false)

    const handleAgreeChange = (value: boolean) => {
        setAgree(value)
    }

    const handleButtonClick = () => {
        alert("Other button clicked.")
    }

    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree agree={agree} onAgreeChange={handleAgreeChange} onClick={handleButtonClick}/>
            <Link to="/sample/10">Index</Link>
        </Main>
    )
}