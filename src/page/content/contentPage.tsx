import {useAuth} from "../../auth/authContext";
import {MenuBox} from "../../components/MenuBox";
import {Button} from "@mui/material";
import {navigateUploadContentPage} from "./contentDestination";
import {useNavigate} from "react-router-dom";
import {getContentFileSrc} from "../../service/contentService";
import {useEffect, useState} from "react";

const ContentPage = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [imageSrc, setImageSrc] = useState<string | null>()

    const handleUpload = () => {
        navigateUploadContentPage(navigate)
    }

    useEffect(() => {
        const fetchImageSrc = async () => {
            const imageSrc = await getContentFileSrc(17)
            setImageSrc(imageSrc)
        }

        fetchImageSrc()
    }, [])


    return (
        <>
            <MenuBox>
                <Button color="inherit" variant="outlined" onClick={handleUpload}>Upload</Button>
            </MenuBox>
            {imageSrc && <img src={imageSrc} alt="Content" />}
        </>
    )
}

export default ContentPage