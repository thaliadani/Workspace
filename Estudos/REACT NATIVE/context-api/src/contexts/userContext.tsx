import { createContext, useState } from "react";
import React from "react";

//Tipagem
interface UserContextProps {
    username: string;
    loginUsername: string;
    saveLoginUserToCache: (username: string) => void;
}

// Context -  Cria o contexto, ou seja, o canal de comunicação
export const UserContext = createContext<UserContextProps | undefined>(
    undefined
);

// Provider -   Segura as informações que serão compartilhadas
export default function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [loginUsername, setloginUsername] = useState<string>('');

    const contextValues = {
        username: 'admin',
        loginUsername: loginUsername,
        saveLoginUserToCache: saveLoginUserToCache
    };

    function saveLoginUserToCache(username: string) {
        if (username !== '') {
            setloginUsername(username);
        }
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}