import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Routes} from "react-router-dom";
import {Route} from "react-router";
import TestIndex from "./base/00/pages/index/Index"
import Base01Index from "./base/01/pages/index/Index";
import Base02Index from "./base/02/pages/index/Index";
import Base03Index from "./base/03/pages/index/Index";
import Base04Index from "./base/04/pages/index/Index";
import Base05Index from "./base/05/pages/index/Index";
import Base06Index from "./base/06/pages/index/Index";
import Base07Index from "./base/07/pages/index/Index";
import Base08Index from "./base/08/AppRoutes";
import Base09Index from "./base/09/AppRoutes";
import Base10Index from "./base/10/AppRoutes";
import Base11Index from "./base/11/AppRoutes";
import Base12Index from "./base/12/AppRoutes";
import Base13Index from "./base/13/AppRoutes";
import Sample01Index from "./sample/01/pages/index/Index"
import Sample02Index from "./sample/02/pages/index/Index";
import Sample03Index from "./sample/03/pages/index/Index";
import Sample04Index from "./sample/04/pages/index/Index";
import Sample05Index from "./sample/05/pages/index/Index";
import Sample06Index from "./sample/06/pages/index/Index";
import Sample07Index from "./sample/07/pages/index/Index";
import Sample08Index from "./sample/08/AppRoutes";
import Sample09Index from "./sample/09/AppRoutes";
import Sample10Index from "./sample/10/AppRoutes";
import Sample11Index from "./sample/11/AppRoutes";
import Sample12Index from "./sample/12/AppRoutes";
import Sample13Index from "./sample/13/AppRoutes";

const bases = [
    <Base01Index/>,
    <Base02Index/>,
    <Base03Index/>,
    <Base04Index/>,
    <Base05Index/>,
    <Base06Index/>,
    <Base07Index/>,
    <Base08Index/>,
    <Base09Index/>,
    <Base10Index/>,
    <Base11Index/>,
    <Base12Index/>,
    <Base13Index/>,
]

const samples = [
    <Sample01Index/>,
    <Sample02Index/>,
    <Sample03Index/>,
    <Sample04Index/>,
    <Sample05Index/>,
    <Sample06Index/>,
    <Sample07Index/>,
    <Sample08Index/>,
    <Sample09Index/>,
    <Sample10Index/>,
    <Sample11Index/>,
    <Sample12Index/>,
    <Sample13Index/>,
]

const padding = (num: number, digit: number) => {
    const pad = "0".repeat(digit)
    return (pad + num).slice(-digit)
}

const Top = () => {
    const length = Math.max(bases.length, samples.length)
    const linkRows = []
    for (let i = 0; i < length; i++) {
        const id = padding(i + 1, 2)
        const tableRow = (
            <tr key={`tr-${id}`}>
                <td>
                    <NavLink className="App-link" to={"base/" + id}>{id}</NavLink>
                </td>
                <td key={`sampleList${id}`}>
                    <NavLink className="App-link" to={"sample/" + id}>{id}</NavLink>
                </td>
            </tr>
        )
        linkRows.push(tableRow)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Introduction to front-end by React
                </p>
                <p>
                    <NavLink className="App-link" to="base/00">Go Test</NavLink>
                </p>

                <table>
                    <thead>
                    <tr>
                        <th>Base</th>
                        <th>Sample</th>
                    </tr>
                    </thead>
                    <tbody>
                    {linkRows}
                    </tbody>
                </table>
            </header>
        </div>
    )
}

const App = () => {
    const baseRoutes = []
    for (let i = 0; i < bases.length; i++) {
        const id = padding(i + 1, 2)
        baseRoutes.push(<Route key={"baseRoute" + id}
                               path={"base/" + id + (i >= 7 ? "/*" : "")}
                               element={bases[i]}/>)
    }

    const sampleRoutes = []
    for (let i = 0; i < samples.length; i++) {
        const id = padding(i + 1, 2)
        sampleRoutes.push(<Route key={"sampleRoute" + id}
                                 path={"sample/" + id + (i >= 7 ? "/*" : "")}
                                 element={samples[i]}/>)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route key="top" index element={<Top/>}/>
                <Route key="test" path="base/00" element={<TestIndex/>}/>
                {baseRoutes}
                {sampleRoutes}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
