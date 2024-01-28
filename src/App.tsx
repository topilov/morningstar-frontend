import {Route, Routes} from "react-router-dom";
import React from "react";
import "./app.css"
import homeRoutes from "./route/home.route";
import adminRoutes from "./route/admin.route";
import authRoutes from "./route/auth.route";

const App: React.FC = () => {
    return (
        <Routes>
            {homeRoutes()}
            {authRoutes()}
            {adminRoutes()}
        </Routes>
    )
}

export default App;

