import React, {useState} from 'react';
import axios from 'axios';
import {Button, Container, Grid, Icon, TextField, Typography} from "@mui/material";
import api from "../../api/api";
import {MenuBox} from "../../components/MenuBox";
import {ImageOutlined} from "@mui/icons-material";
import {uploadContent} from "../../service/contentService";
import {useAuth} from "../../auth/authContext";

interface UploadContentRequest {
    file: File | null,
    title: string,
    description: string,
    price: number,
}

interface FormState {
    file: File | null,
    title: string,
    description: string,
    price: string,
}

const UploadImagePage = () => {
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
                const formData = new FormData();

                formData.append('file', formState.file);
                formData.append('title', formState.title)
                formData.append('description', formState.description)
                formData.append('price', formState.price)

                const response = await uploadContent(user.id, formData)
                alert(`Image uploaded successfully -> ${response?.id}`);

                setFormState({
                    file: null,
                    title: '',
                    description: '',
                    price: ''
                });
            } catch (error) {
                console.error(error);
                alert('Failed to upload image');
            }
        };

        return (
            <MenuBox maxWidth="sm" mx="auto" my={8}>
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
                </Grid>
            </MenuBox>
        );
    }
;

export default UploadImagePage;