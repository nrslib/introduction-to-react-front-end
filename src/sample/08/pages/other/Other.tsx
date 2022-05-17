import React from 'react'
import Main from "../../../../components/layout/Main"
import ButtonWithAgree from "../../components/ButtonWithAgree";
import {NavLink} from "react-router-dom";

export default function Other() {
    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree/>
            <NavLink to="/sample/08">Home</NavLink>
        </Main>
    )
}