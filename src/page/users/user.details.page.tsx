import React, { useEffect, useState } from "react";
import {User} from "../../entity/user";
import {fetchUser} from "../../api/users/user.api";
import {useNavigate} from "react-router-dom";
import {navigateUsersPage} from "../admin/admin.destination";

interface UserDetailsProps {
    userId: number;
}

interface UserState {
    user: User | null,
    isLoaded: boolean,
}

const UserDetailsPage: React.FC<UserDetailsProps> = ({ userId }) => {
    const navigate = useNavigate()
    const [userState, setUserState] = useState<UserState>({
        user: null,
        isLoaded: false,
    })

    useEffect(() => {
        const fetchData = async () => {
            const fetchedUser = await fetchUser(userId)

            setUserState({
                user: fetchedUser,
                isLoaded: true
            })
        }

        fetchData()
    }, [userId]);

    if (!userState.isLoaded) {
        return <div>Loading...</div>
    }

    const user = userState.user

    if (!user) {
        return <div>User not found</div>
    }

    const handleBack = () => {
        navigateUsersPage(navigate)
    }

    return (
        <div className="main-container">
            <h1>{user.username}</h1>
            <p>ID: {user.id}</p>
            <p>Balance: {user.balance}</p>
            <button type="button" className="button-secondary" onClick={handleBack}>Back</button>
        </div>
    )
}

export default UserDetailsPage;