import React from "react";
import "./app.css"
import AuthProvider from "./auth/authProvider";
import Routes from "./route/routes";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    )
}

export default App;

