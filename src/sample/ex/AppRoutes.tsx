import React from 'react'

import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Other from "./pages/Other";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/other" element={<Other/>}/>
        </Routes>
    )
}