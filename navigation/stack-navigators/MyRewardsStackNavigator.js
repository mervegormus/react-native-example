import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyRewards from "../../screens/MyReawards";

const Stack = createStackNavigator()


const MyRewardsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="MyRewards" component={MyRewards} />
        </Stack.Navigator>
    )
}

export default MyRewardsStackNavigator