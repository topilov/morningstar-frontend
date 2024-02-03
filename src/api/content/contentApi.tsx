import api from "../api";
import {BasicContent} from "../../entity/basicContent";
import {FileContent} from "../../entity/fileContent";
import {ImagePreviewContent} from "../../entity/imagePreviewContent";

export interface UploadContentRequest {
    multipartFile: File | null,
    title: string,
    description: string,
    price: number,
}

export const getBasicContent = async (contentId: number) => {
    try {
        const response = await api.get<BasicContent>(`api/content/${contentId}`)
        return response.data
    } catch (e) {
        console.error("Error while fetching content", e)
        return null
    }
}

export const getFileContent = async (contentId: number) => {
    try {
        const response = await api.get<FileContent>(`api/content/${contentId}/file`)
        return response.data
    } catch (e) {
        console.error("Error while fetching file content", e)
        return null
    }
}

export const getImagePreviewContent = async (contentId: number) => {
    try {
        const response = await api.get<ImagePreviewContent>(`api/content/${contentId}/image-preview`)
        return response.data
    } catch (e) {
        console.error("Error while fetching image preview content", e)
        return null
    }
}

export const getBasicContents = async () => {
    try {
        const response = await api.get<BasicContent[]>(`api/contents`)
        return response.data
    } catch (e) {
        console.error("Error while fetching user contents", e)
        return null
    }
}

export const uploadContent = async (userId: number, request: UploadContentRequest) => {
    try {
        console.log(request)
        const response = await api.post<BasicContent>(`/api/user/${userId}/contents`, request, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        return response.data
    } catch (e) {
        console.error("Error while uploading content", e)
        return null
    }
}