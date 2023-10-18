import { createContext, useState } from "react";


export const UsersContext = createContext();
UsersContext.displayName = 'UsersContext';

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

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