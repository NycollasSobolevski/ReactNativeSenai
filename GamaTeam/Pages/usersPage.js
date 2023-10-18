import { useContext, useEffect, useState } from "react";
import UserListCard from "../Components/UserListCardComponent/UserListCard";
import { UsersContext } from "../Context/UsersContext";
import { View } from "react-native";

export default function UsersPage () {
    // const users = JSON.parse(localStorage.getItem("user"));
    const { users } = useContext(UsersContext)
    const {sla, setSla} = useState([]);

    console.log(users);

    const Users = () => {
        return users.map(usr => {
            return (
                <>
                    <UserListCard user={usr}></UserListCard>
                </>
            )
        })
    }

    return (
        <>
            <Users></Users>
        </>    
    )
}