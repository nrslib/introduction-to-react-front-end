import React from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import {NavLink} from "react-router-dom";

export default function Index() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <NavLink to="/sample/08/other">Other</NavLink>
        </Main>
    )
}