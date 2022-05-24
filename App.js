import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler'
import DrawerNavigator from "./navigation/DrawerNavigator";
import Login from "./screens/LoginScreen";
import Context from "./Context";
import Register from "./screens/RegisterScreen";
import {createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator()

const UserStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}
export default function App() {
    const [isLogged, setIsLogged] = useState(false)
    const [modalVisible,setModalVisible] = useState(false)
    const contextProvider = {isLogged, setIsLogged,modalVisible,setModalVisible}
    return (<Context.Provider value={contextProvider}>
            <NavigationContainer>
                {!isLogged ? <UserStackNavigator/> : <DrawerNavigator/>}
            </NavigationContainer>
    </Context.Provider>
    );
}

