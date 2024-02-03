import React, {useEffect, useState} from "react";
import {getImagePreviewContent} from "../../service/contentService";
import {Skeleton} from "@mui/material";
import {Image} from "../Image";

interface ImagePreviewProps {
    contentId: number,
    title: string,
    onClick: () => void,
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ title, contentId, onClick }) => {
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true

        const loadImage = async () => {
            const imagePreview = await getImagePreviewContent(contentId)
            const imagePreviewSrc = imagePreview?.imagePreviewSrc

            if (isMounted && imagePreviewSrc) {
                setImage(imagePreviewSrc)
            }
        }

        loadImage()

        return () => {
            isMounted = false
        }
    }, [contentId]);

    return (
        <>
            {image != null ? (
                <Image
                    width={200}
                    height={200}
                    src={`${image}`}
                    alt={title}
                    loading="lazy"
                    onClick={onClick}
                    sx={{
                        ":hover": {
                            backgroundColor: '#161b20',
                            color: '#ffffff',
                        }}}
                />
            ) : (
                <Skeleton variant="rectangular" width={200} height={200} />
            )}
        </>
    )
}

export default ImagePreview;