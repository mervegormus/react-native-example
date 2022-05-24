import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Campaigns from "../../screens/CampaignsScreen";

const Stack = createStackNavigator()


const CampaignsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Campaigns" component={Campaigns} />
        </Stack.Navigator>
    )
}

export default CampaignsStackNavigator