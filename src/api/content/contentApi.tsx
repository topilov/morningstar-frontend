import api from "../api";
import {Content} from "../../entity/content";

export const getContent = async (contentId: number) => {
    try {
        const response = await api.get<Content>(`api/content/${contentId}`)
        return response.data
    } catch (e) {
        console.error("Error while fetching content", e)
    }
}

export const getContentFile = async (contentId: number) => {
    try {
        return await api.get(`api/content/${contentId}/file`, {responseType: 'arraybuffer'})
    } catch (e) {
        console.error("Error while fetching content file", e)
    }
}

export const uploadContent = async (userId: number, content: FormData) => {
    try {
        const response = await api.post<Content>(`/api/user/${userId}/content`, content, {
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