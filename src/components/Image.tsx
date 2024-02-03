import {styled} from "@mui/material";


export const Image = styled('img')(({ width, height }) => ({
    width: width || 'auto',
    height: height || 'auto',
}));