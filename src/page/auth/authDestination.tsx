import {NavigateFunction} from "react-router-dom";

const REGISTER_PAGE_ROUTE = "/register"
const LOGIN_PAGE_ROUTE = "/login"

export const navigateRegisterPage = (navigate: NavigateFunction) => {
    navigate(REGISTER_PAGE_ROUTE)
}

export const navigateLoginPage = (navigate: NavigateFunction) => {
    navigate(LOGIN_PAGE_ROUTE)
}