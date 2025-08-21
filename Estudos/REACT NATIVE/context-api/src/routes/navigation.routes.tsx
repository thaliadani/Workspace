import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";

const {Screen, Navigator} = createStackNavigator();

export type RootStackParamList = {
    Home: undefined;
    User: {username: string};
};

export function NavigationRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen 
                name="Home" 
                component={HomeScreen} 
                options={{headerShown: false}}
            />
            <Screen 
                name="User" 
                component={require('../screens/UserScreen').UserScreen} 
                options={{headerShown: false}}
            />
        </Navigator>
    );
}