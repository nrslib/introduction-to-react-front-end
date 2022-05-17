import React from 'react'

import {Route, Routes} from "react-router";
import Index from "./pages/index/Index";
import Other from "./pages/other/Other";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/other" element={<Other/>}/>
        </Routes>
    )
}