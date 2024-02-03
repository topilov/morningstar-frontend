import {useAuth} from "../../auth/authContext";
import {MenuBox} from "../../components/MenuBox";
import {
    Box,
    Button,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Modal, Skeleton,
    Typography
} from "@mui/material";
import {getBasicContents} from "../../service/contentService";
import React, {useEffect, useState} from "react";
import {Info} from "@mui/icons-material";
import {SideList} from "../../components/content/SideList";
import UploadImageForm from "../../components/content/UploadImageForm";
import {navigateContentPage} from "./contentDestination";
import {useNavigate} from "react-router-dom";
import ContentImageListItem from "../../components/content/ContentImageListItem";
import {BasicContent} from "../../entity/basicContent";
import ImagePreview from "../../components/content/ImagePreview";

const ContentsPage = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const [basicContents, setBasicContents] = useState<BasicContent[] | null>()
    const [upload, setUpload] = useState(false)

    const handleUpload = () => setUpload(true)
    const handleUploadClose = () => setUpload(false)

    const handleContentClick = (contentId: number) => navigateContentPage(navigate, contentId)

    useEffect(() => {
        const fetchBasicContents = async () => {
            const contents = await getBasicContents()
            setBasicContents(contents)
        }

        fetchBasicContents()
    }, [user])

    return (
        <>
            <SideList />
            <Modal open={upload} onClose={handleUploadClose}>
                <UploadImageForm handleClose={handleUploadClose} />
            </Modal>
            <Grid container justifyContent="center" alignItems="center" sx={{minHeight: "100vh"}}>
                <MenuBox my={8}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography component="h1" variant="h6">Content</Typography>
                        <Button variant="outlined" color="inherit" onClick={handleUpload}>Upload</Button>
                    </Box>
                    <ImageList cols={6} rowHeight={200} gap={8}>
                        {basicContents ? (
                            basicContents.map((content) => (
                                <ContentImageListItem key={content.id}>
                                    <ImagePreview contentId={content.id} title={content.title} onClick={() => handleContentClick(content.id)}/>
                                    <ImageListItemBar
                                        title={content.title}
                                        subtitle={`Price: ${content.price}`}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${content.title}`}
                                            >
                                                <Info />
                                            </IconButton>
                                        }
                                    />
                                </ContentImageListItem>
                            ))
                        ) : (
                            <Skeleton variant="rectangular" width={200} height={200} />
                        )}
                    </ImageList>
                </MenuBox>
            </Grid>
        </>
    )
}

export default ContentsPage