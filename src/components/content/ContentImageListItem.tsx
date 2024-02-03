import {ImageListItem, styled} from "@mui/material";

const ContentImageListItem = styled(ImageListItem)(({ theme }) => ({
    "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
    }
}))

export default ContentImageListItem