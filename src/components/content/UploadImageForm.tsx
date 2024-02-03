import React, {useState} from 'react';
import axios from 'axios';
import {Button, Container, Grid, Icon, TextField, Typography} from "@mui/material";
import api from "../../api/api";
import {MenuBox} from "../MenuBox";
import {ImageOutlined} from "@mui/icons-material";
import {uploadContent} from "../../service/contentService";
import {useAuth} from "../../auth/authContext";
import {UploadContentRequest} from "../../api/content/contentApi";

interface FormState {
    file: File | null,
    title: string,
    description: string,
    price: string,
}

interface UploadImageFormProps {
    handleClose: () => void
}

const UploadImageForm: React.FC<UploadImageFormProps> = ({ handleClose }) => {
        const [formState, setFormState] = useState<FormState>({
            file: null,
            title: '',
            description: '',
            price: '',
        })

        const {user} = useAuth();

        if (user == null) {
            return <div>Required auth</div>
        }

        const handleInputChange = (
            event: React.ChangeEvent<HTMLInputElement>
        ): void => {
            setFormState({
                ...formState,
                [event.target.name]: event.target.value
            });
        };

        const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormState({
                    ...formState,
                    file: event.target.files?.[0] ?? null
                }
            )
        }

        const handleSubmit = async () => {
            if (!formState.file) {
                alert('Please select an image file');
                return;
            }

            try {
                const request: UploadContentRequest = {
                    multipartFile: formState.file,
                    title: formState.title,
                    description: formState.description,
                    price: Number(formState.price),
                }

                const response = await uploadContent(user.id, request)
                alert(`Image uploaded successfully -> ${response?.id}`);
            } catch (error) {
                console.error(error);
                alert('Failed to upload image');
            }
        };

        return (
            <Grid container justifyContent="center" alignItems="center" sx={{minHeight: "100vh"}}>
                <MenuBox my={8}>
                    <Grid container spacing={3} justifyContent="center"
                          sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Grid item xs={12}>
                            <Icon>
                                <ImageOutlined/>
                            </Icon>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h6">Upload Image</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Title"
                                name="title"
                                value={formState.title}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name="description"
                                value={formState.description}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Price"
                                name="price"
                                value={formState.price}
                                onChange={handleInputChange}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth component="label">
                                Upload File
                                <input type="file" hidden onChange={handleImageChange}/>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth color="inherit" onClick={handleSubmit}>Upload</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth color="inherit" onClick={handleClose}>Close</Button>
                        </Grid>
                    </Grid>
                </MenuBox>
            </Grid>
        );
    }
;

export default UploadImageForm;