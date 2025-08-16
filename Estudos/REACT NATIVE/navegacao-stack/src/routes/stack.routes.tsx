import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import {GalleryScreen} from "../screens/GalleyScreen";

const {Screen, Navigator} = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen 
                name="Home" component={HomeScreen} 
                options={{headerShown: false}}
            />
            <Screen 
                name="Gallery" component={GalleryScreen} 
                options={{
                    title: 'Gallery',
                    headerStyle: {
                        backgroundColor: '#202024'
                    },
                    headerTintColor: '#B2A4FF'
                }}
            />
        </Navigator>
    );
}