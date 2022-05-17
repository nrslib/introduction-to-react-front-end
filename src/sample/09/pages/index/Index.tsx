import React from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import Link from "../../components/Link";

export default function Index() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <Link to="/sample/09/other">Other</Link>
        </Main>
    )
}