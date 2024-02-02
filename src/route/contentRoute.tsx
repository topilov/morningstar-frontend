import UploadContentPage from "../page/content/uploadContentPage";
import {ProtectedRoute} from "./protectedRoute";
import {UserRole} from "../entity/user";
import ContentPage from "../page/content/contentPage";

const contentRoutes = [{
    path: "/content",
    element: <ProtectedRoute roles={[UserRole.ADMIN]} />,
    children: [
        {
            path: "",
            element: <ContentPage />
        },
        {
            path: "upload",
            element: <UploadContentPage />
        }
    ]
}]

export default contentRoutes