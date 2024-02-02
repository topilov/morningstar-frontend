import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import authRoutes from "./authRoute";
import adminRoutes from "./adminRoute";
import React from "react";
import contentRoutes from "./contentRoute";
import Root from "../page/home/homePage";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                ...authRoutes,
                ...adminRoutes,
                ...contentRoutes
            ]
        }
    ])

    return <RouterProvider router={router}/>
}

export default Routes;