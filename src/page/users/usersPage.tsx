import {useNavigate} from "react-router-dom";
import {navigateAdminPage} from "../admin/adminDestination";
import {User} from "../../entity/user";
import {useEffect, useState} from "react";
import {getUsers} from "../../service/userService";
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

interface UsersState {
    users: User[] | undefined;
    isLoaded: boolean
}

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70,},
    {field: 'username', headerName: 'Username', width: 130},
    {field: 'password', headerName: 'Password', width: 600},
    {field: 'role', headerName: 'Role', width: 130},
    {field: 'balance', headerName: 'Balance', width: 130},
    {field: 'createdAt', headerName: 'Created at', width: 250},
    {field: 'updatedAt', headerName: 'Updated at', width: 250},
    {field: 'locked', headerName: 'Locked', width: 130},
]

export const UsersPage = () => {
    const navigate = useNavigate()
    const [usersState, setUsersState] = useState<UsersState>({
        users: undefined,
        isLoaded: false
    })

    useEffect(() => {
        const fetchData = async () => {
            const fetchedUsers = await getUsers()

            setUsersState({
                users: fetchedUsers?.users,
                isLoaded: true
            })
        }

        fetchData()
    }, []);

    const handleBackClick = () => {
        navigateAdminPage(navigate)
    }

    if (usersState.users === undefined) {
        return <div>Loading</div>
    }

    return (
        <div>
            <DataGrid
                rows={usersState.users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4}}>
                <Button color="secondary" onClick={handleBackClick}>Back</Button>
            </Box>
        </div>
    )
}