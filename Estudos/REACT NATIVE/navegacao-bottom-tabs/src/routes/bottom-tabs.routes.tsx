import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import  HomeScreen  from '../screens/HomeScreen';
import { GalleryScreen } from '../screens/GalleryScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false , tabBarLabel: 'HOME', tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={30} />, tabBarActiveTintColor: '#B2A4FF', tabBarLabelStyle: {fontSize: 14}}}

                
            />
            <Screen
                name="Gallery"
                component={GalleryScreen}   
                options={{headerShown: false, tabBarLabel: 'GALLERY', tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="image" color={color} size={30} />, tabBarActiveTintColor: '#B2A4FF', tabBarLabelStyle: {fontSize: 14}}}   
                
            />
        </Navigator>
    );
}