import React from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import {NavLink} from "react-router-dom";

// TODO: Link コンポーネントを作成し使う
export default function Index() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <NavLink to="/base/09/other">Other</NavLink>
        </Main>
    )
}