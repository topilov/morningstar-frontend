import {NavigateFunction} from "react-router-dom";

const CONTENT_PAGE_ROUTE = "/content"

export const navigateContentsPage = (navigate: NavigateFunction) => {
    navigate(CONTENT_PAGE_ROUTE)
}

export const navigateContentPage = (navigate: NavigateFunction, contentId: number) => {
    navigate(`${CONTENT_PAGE_ROUTE}/${contentId}`)
}