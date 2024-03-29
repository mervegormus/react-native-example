import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../../screens/HomeScreen";

const Stack = createStackNavigator()


const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator