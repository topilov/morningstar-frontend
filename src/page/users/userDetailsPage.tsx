import React, {useEffect, useState} from "react";
import {User} from "../../entity/user";
import {useNavigate} from "react-router-dom";
import {getUser} from "../../api/users/userApi";
import {navigateFindUserPage} from "../admin/adminDestination";
import {MenuBox} from "../../components/MenuBox";
import {Box, Button, Icon, Typography} from "@mui/material";
import {Person2} from "@mui/icons-material";

interface UserDetailsProps {
    id: number | undefined;
}

interface UserState {
    user: User | null,
    isLoaded: boolean,
}

const UserDetailsPage: React.FC<UserDetailsProps> = ({id}) => {
    const navigate = useNavigate()
    const [userState, setUserState] = useState<UserState>({
        user: null,
        isLoaded: false,
    })

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const fetchedUser = await getUser(`${id}`)

                setUserState({
                    user: fetchedUser,
                    isLoaded: true
                })
            }
        }

        fetchData()
    }, [id]);

    if (!userState.isLoaded) {
        return <div>Loading...</div>
    }

    const user = userState.user

    if (!user) {
        return <div>User not found</div>
    }

    const handleBack = () => {
        navigateFindUserPage(navigate)
    }

    return (
        <MenuBox maxWidth="sm" mx="auto" my={8}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mb: 2}}>
                <Icon>
                    <Person2/>
                </Icon>
                <Typography component="h1" variant="h6">User Details</Typography>
            </Box>
            <Typography>ID: {user.id}</Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>Role: {user.role}</Typography>
            <Typography>Balance: {user.balance}</Typography>
            <Typography>Created at: {String(user.createdAt)}</Typography>
            <Typography>Updated at: {String(user.updatedAt)}</Typography>
            <Typography>Locked: {String(user.locked)}</Typography>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 2}}>
                <Button color="secondary" onClick={handleBack}>Back</Button>
            </Box>
        </MenuBox>
    )
}

export default UserDetailsPage;