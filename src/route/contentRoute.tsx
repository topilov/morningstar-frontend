import {ProtectedRoute} from "./protectedRoute";
import {UserRole} from "../entity/user";
import ContentsPage from "../page/content/contentsPage";
import React from "react";
import {useParams} from "react-router-dom";
import ContentPage from "../page/content/contentPage";

const ContentPageWrapper: React.FC = () => {
    const {id} = useParams();
    return <ContentPage contentId={Number(id)}/>;
}

const contentRoutes = [{
    path: "/content",
    element: <ProtectedRoute roles={[UserRole.ADMIN]} />,
    children: [
        {
            path: "",
            element: <ContentsPage />
        },
        {
            path: ":id",
            element: <ContentPageWrapper />
        },
    ]
}]

export default contentRoutes