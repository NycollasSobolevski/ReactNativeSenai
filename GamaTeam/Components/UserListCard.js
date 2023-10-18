import { useEffect, useState } from "react";

export default function UserListCard () {
    const [userList, setUserlist] = useState([]);

    useEffect(() => {
        setUserlist(...userList, sessionStorage.getItem('userlist'));
    })

    return (
        <>

        </>
    )
}
