import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Context from "../../Context";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const {setIsLogged} = useContext(Context)
    const navigation = useNavigation();

    const [input, setInput] = React.useState({
        email: "",
        password: ""
    });

    const login = () => {
        if (input.email && input.password)
            setIsLogged(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Icon name="user" size={100} color={'#551E18'}/>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={(text => setInput(prevState => ({...prevState, email: text})))}
                value={input.email}
                placeholder={"Email"}
            />
            <TextInput
                style={styles.input}
                onChangeText={(passwordText => setInput(prevState => ({...prevState, password: passwordText})))}
                value={input.password}
                placeholder={"Password"}
            />
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <View style={styles.view}>
            <Text>Henüz hesabın yok mu?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate({ name: 'Register' })}>
                <Text>Kayıt Ol</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'white',
        backgroundColor: 'white',
        marginBottom: 10
    },
    input: {
        width: Dimensions.get("window").width * 0.8,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 7
    },
    button: {
        backgroundColor: '#551E18',
        padding: 10,
        borderRadius: 20,
        width: 150,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    view:{
        flexDirection:'row'
    },
});
export default Login;