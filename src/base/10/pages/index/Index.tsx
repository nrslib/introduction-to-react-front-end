import React from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import Link from "../../components/Link";

// TODO: チェックを入れた際に「同意しました」を alert する
export default function Index() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <Link to="/base/10/other">Other</Link>
        </Main>
    )
}