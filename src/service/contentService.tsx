import {getContentFile, getContent as apiGetContent, uploadContent as apiUploadContent} from "../api/content/contentApi";

export const getContent = async (contentId: number) => {
    return apiGetContent(contentId)
}

export const getContentFileSrc = async (contentId: number): Promise<string | null> => {
    const response = await getContentFile(contentId)

    if (!response) {
        return null
    }

    const base64 = btoa(String.fromCharCode(...new Uint8Array(response.data)));
    return  `data:${response.headers['content-type'].toLowerCase()};base64,${base64}`;
}

export const uploadContent = async (userId: number, content: FormData) => {
    return apiUploadContent(userId, content)
}