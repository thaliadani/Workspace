import { NavigationContainer } from "@react-navigation/native";
import { NavigationRoutes } from "./navigation.routes";
import UserContextProvider from "../contexts/userContext";

export function Routes() {
    return (
        <NavigationContainer>
            <UserContextProvider>
                <NavigationRoutes />
            </UserContextProvider>
        </NavigationContainer>
    );
}