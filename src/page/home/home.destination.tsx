import {NavigateFunction} from "react-router-dom";

const HOME_PAGE_ROUTE = "/"

export const navigateHomePage =  (navigate: NavigateFunction) => {
    navigate(HOME_PAGE_ROUTE)
}