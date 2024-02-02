import {NavigateFunction} from "react-router-dom";

const CONTENT_PAGE_ROUTE = "/content"
const UPLOAD_CONTENT_PAGE_ROUTE = "/content/upload"

export const navigateContentPage = (navigate: NavigateFunction) => {
    navigate(CONTENT_PAGE_ROUTE)
}

export const navigateUploadContentPage = (navigate: NavigateFunction) => {
    navigate(UPLOAD_CONTENT_PAGE_ROUTE)
}