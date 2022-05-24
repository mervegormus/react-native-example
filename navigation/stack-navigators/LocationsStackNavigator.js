import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Locations from "../../screens/LocationsScreen";

const Stack = createStackNavigator()

const LocationsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Locations" component={Locations} />
        </Stack.Navigator>
    )
}

export default LocationsStackNavigator