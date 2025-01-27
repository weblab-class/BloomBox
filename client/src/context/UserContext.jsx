import { createContext, useContext, useEffect, useState } from "react";
import { get, post } from "../utilities";
import { SocketContext } from "./SocketContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const socket = useContext(SocketContext);
    const [myUser, setMyUser] = useState(null);

    const loadUser = async () => {
        await get("/api/users/current")
        .then((response) => {
            setMyUser(response.user);
        }).catch(error => console.log("Error getting user data", error));
    };
    
    const updateUser = async (newFields) => {
        await post("/api/users/current/update", {newFields: newFields})
            .then(response => setMyUser(response.user))
            .catch(error => console.log("Error updating user data", error));
    };

    useEffect(() => {
        if (myUser) {
            socket.emit("set user", myUser);
        }
    }, [myUser, socket]);

    return (
        <UserContext.Provider value={{
            myUser,
            setMyUser,
            loadUser,
            updateUser,
        }}>
            { children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };