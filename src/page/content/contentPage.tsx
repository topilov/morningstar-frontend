import {useAuth} from "../../auth/authContext";
import React, {useEffect, useState} from "react";
import {Button, Grid, Skeleton, Typography} from "@mui/material";
import {SideList} from "../../components/content/SideList";
import {MenuBox} from "../../components/MenuBox";
import {Image} from "../../components/Image";
import {useNavigate} from "react-router-dom";
import {navigateContentsPage} from "./contentDestination";
import {v4 as uuidv4} from 'uuid';
import {getBasicContent, getFileContent, getImagePreviewContent} from "../../service/contentService";
import ImagePreview from "../../components/content/ImagePreview";
import {BasicContent} from "../../entity/basicContent";

interface ContentPageProps {
    contentId: number,
}

const ContentPage: React.FC<ContentPageProps> = ({contentId}) => {
    const navigate = useNavigate()
    const [ basicContent, setBasicContent ] = useState<BasicContent | null>(null)

    useEffect(() => {
        const fetchBasicContent = async () => {
            const fetchedBasicImage = await getBasicContent(contentId)
            if (fetchedBasicImage) {
                console.log(fetchedBasicImage)
                setBasicContent(fetchedBasicImage)
            }
        }

        fetchBasicContent()
    }, [contentId])

    const onDownload = () => {
        getFileContent(contentId).then((fileContent) => {
            const link = document.createElement("a");
            link.download = uuidv4();
            link.href = `${fileContent?.fileSrc}`;
            link.click();
        })
    };

    const onBack = () => navigateContentsPage(navigate)

    return (
        <>
            <SideList />
            <Grid container justifyContent="center" alignItems="center" sx={{minHeight: "100vh"}}>
                <MenuBox my={8}>
                    { basicContent && (
                        <ImagePreview contentId={contentId} title={basicContent?.title} onClick={ () => {}} />
                    )}
                    { basicContent && (
                        <>
                            <Typography component="h1" variant="h6">{basicContent.title}</Typography>
                            <Typography component="h1" variant="h6">{basicContent.description}</Typography>
                            <Button color="inherit" variant="outlined" fullWidth onClick={onDownload}>Download</Button>
                            <Button color="secondary" fullWidth onClick={onBack}>Back</Button>
                        </>
                    )}
                </MenuBox>
            </Grid>
        </>
    )
}

export default ContentPage;