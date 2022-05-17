import React, {useState} from 'react'
import Main from "../../../components/layout/Main"
import ButtonWithAgree from "../components/ButtonWithAgree";
import Link from "../components/Link";

export default function Index() {
    const [agree, setAgree] = useState(false)

    const handleAgreeChange = (value: boolean) => {
        setAgree(value)
        if (value) {
            alert("同意しました")
        }
    }

    const handleButtonClick = () => {
        alert("Index button clicked.")
    }

    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree agree={agree}
                             agreeLabel="ホームで同意する"
                             onAgreeChange={handleAgreeChange}
                             onClick={handleButtonClick}
            >
                Indexの実行ボタン
            </ButtonWithAgree>
            <Link to="/sample/10/other">Other</Link>
        </Main>
    )
}