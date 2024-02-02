import {NavigateFunction} from "react-router-dom";

const ADMIN_PAGE_ROUTE = "/admin"
const USER_CREATE_PAGE_ROUTE = `${ADMIN_PAGE_ROUTE}/users/create`
const FIND_USER_PAGE_ROUTE = `${ADMIN_PAGE_ROUTE}/find-user`
const USERS_PAGE_ROUTE = `${ADMIN_PAGE_ROUTE}/users`

export const navigateAdminPage = (navigate: NavigateFunction) => {
    navigate(ADMIN_PAGE_ROUTE)
}

export const navigateUserCreatePage = (navigate: NavigateFunction) => {
    navigate(USER_CREATE_PAGE_ROUTE)
}

export const navigateFindUserPage = (navigate: NavigateFunction) => {
    navigate(FIND_USER_PAGE_ROUTE)
}

export const navigateUsersPage = (navigate: NavigateFunction) => {
    navigate(USERS_PAGE_ROUTE)
}

export const navigateUserDetailsPage = (navigate: NavigateFunction, userId: number) => {
    navigate(`${FIND_USER_PAGE_ROUTE}/${userId}`)
}