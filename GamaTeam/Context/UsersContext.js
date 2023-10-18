import { createContext, useEffect, useState } from "react";


export const UsersContext = createContext();
UsersContext.displayName = 'UsersContext';

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {Name: "nyco", Email: "nyc@email.com", Age: "21", Password: "123", Notify: true, Gender: "Male"},
        {Name: "nyco", Email: "nyc@email.com", Age: "21", Password: "123", Notify: true, Gender: "Male"},
        {Name: "nyco", Email: "nyc@email.com", Age: "21", Password: "123", Notify: true, Gender: "Male"}]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(users))
    },[users])

    function addUser(user) {
        setUsers([...users, user]);
    }

    function Login(user) {
        var userExists = users.filter( u => 
            u.Name.toLowerCase() == user.identify.toLowerCase() ||
            u.Email.toLowerCase() == user.identify.toLowerCase() );
        
        userExists = userExists.filter( u => 
            u.Password == user.password
        );

        if( userExists.length > 0 )
            return true;

        return false;
        
    }

    return (
        <UsersContext.Provider 
            value={{
                users, 
                setUsers, 
                addUser,
                Login
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}