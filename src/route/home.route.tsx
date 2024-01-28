import {Route} from "react-router-dom";
import HomePage from "../page/home/home.page";

const homeRoutes = () => {
    return (
        <Route path="/" element={<HomePage />} />
    );
};

export default homeRoutes;