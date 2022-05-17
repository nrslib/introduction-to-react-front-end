import React from "react";
import {NavLink} from "react-router-dom";

export type Props = {
    children?: React.ReactNode
}

export default function Main(p: Readonly<Props>) {
    return (
        <div className="App">
            <header className="App-header">
                {p.children}
                <p>
                    <NavLink className="App-link" to="/">Go Back</NavLink>
                </p>
            </header>
        </div>
    )
}