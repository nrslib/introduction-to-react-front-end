import React from 'react'

import {Route, Routes} from "react-router";
import Index from "./pages/index/Index";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
        </Routes>
    )
}