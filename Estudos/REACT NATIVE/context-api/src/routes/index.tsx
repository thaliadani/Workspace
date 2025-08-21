import { NavigationContainer } from "@react-navigation/native";

import { NavigationRoutes } from "./navigation.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <NavigationRoutes />
        </NavigationContainer>
    );
}