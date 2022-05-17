import React from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import Link from "../../components/Link";

export default function Other() {
    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree/>
            <Link to="/sample/10">Index</Link>
        </Main>
    )
}