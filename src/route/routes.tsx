import {createBrowserRouter, RouterProvider} from "react-router-dom";
import homeRoutes from "./homeRoute";
import authRoutes from "./authRoute";
import adminRoutes from "./adminRoute";
import React from "react";

const Routes = () => {
    const router = createBrowserRouter([
        ...homeRoutes,
        ...authRoutes,
        ...adminRoutes
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default Routes;