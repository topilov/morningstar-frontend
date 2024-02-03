import {
    getBasicContents as apiGetBasicContents,
    getFileContent as apiGetFileContent,
    getBasicContent as apiGetBasicContent,
    getImagePreviewContent as apiGetImagePreviewContent,
    uploadContent as apiUploadContent,
    UploadContentRequest
} from "../api/content/contentApi";
import {ImagePreviewContent} from "../entity/imagePreviewContent";
import {FileContent} from "../entity/fileContent";

export const getBasicContent = async (contentId: number) => {
    return await apiGetBasicContent(contentId)
}

export const getFileContent = async (contentId: number) => {
    const content = await apiGetFileContent(contentId)

    if (!content) {
        return null
    }

    performFileContent(content)

    return content
}

export const getImagePreviewContent = async (contentId: number) => {
    const content = await apiGetImagePreviewContent(contentId)

    if (!content) {
        return null
    }

    performImagePreviewContent(content)

    return content
}

export const getBasicContents = async () => {
    const contents = await apiGetBasicContents()
    return contents;
}

export const uploadContent = async (userId: number, request: UploadContentRequest) => {
    return apiUploadContent(userId, request)
}

const performImagePreviewContent = (imagePreviewContent: ImagePreviewContent) => {
    if (imagePreviewContent.imagePreview) {
        imagePreviewContent.imagePreviewSrc = base64ToSrc(imagePreviewContent.imagePreviewType, imagePreviewContent.imagePreview)
        delete imagePreviewContent.imagePreview
    }
}

const performFileContent = (fileContent: FileContent) => {
    if (fileContent.file) {
        fileContent.fileSrc = base64ToSrc(fileContent.fileType, fileContent.file)
        delete fileContent.file
    }
}

const base64ToSrc = (contentType: string, base64: Uint8Array) => {
    return `data:${contentType.toLowerCase()};base64,${base64}`
}