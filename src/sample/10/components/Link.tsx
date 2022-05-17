import React from "react";
import {To} from "react-router";
import {NavLink} from "react-router-dom";

export type Props = {
    children?: React.ReactNode
    to: To
}

export default function Link(p: Readonly<Props>) {
    return (
        <>
            <NavLink className="App-link" to={p.to}>{p.children}</NavLink>
        </>
    )
}