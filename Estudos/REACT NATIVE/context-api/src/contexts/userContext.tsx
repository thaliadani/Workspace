import { createContext } from "react";
import React from "react";

// Context -  Cria o contexto, ou seja, o canal de comunicação
export const UserContext = createContext({});

// Provider -   Segura as informações que serão compartilhadas
export default function UserContextProvider({ children }: { children: React.ReactNode }) {
    const contextValue = {username: ''};

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}