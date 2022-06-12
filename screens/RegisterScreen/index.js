import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";
import {Feather} from "@expo/vector-icons";

const Register = () => {
    const navigation = useNavigation();

    const [input, setInput] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [secureText, setSecureText] = React.useState({
        securePassword: true,
        secureConfirmPassword: true
    })

    const register = () => {
        if (input.email && input.password === input.confirmPassword)
            navigation.navigate({name: 'Login'})
    }
    return (<SafeAreaView style={{flex: 1}}>
            <View style={styles.imageView}>
                <Image style={styles.image}
                       source={require('../../assets/header.png')}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.circle}>
                    <Icon name="user" size={100} color={'#551E18'}/>
                </View>
                <View style={styles.inputView}>
                    <Feather name="mail" size={20} color={'#551E18'}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text => setInput(prevState => ({...prevState, email: text})))}
                        value={input.email}
                        placeholder={"Email"}
                        keyboardType={"email-address"}
                        placeholderTextColor={'#551E18'}
                    />
                </View>
                <View style={styles.inputView}>
                    <Feather name="lock" size={20} color={'#551E18'}/>
                    <TextInput
                        style={[styles.input, {width: Dimensions.get("window").width * 0.75}]}
                        onChangeText={(passwordText => setInput(prevState => ({...prevState, password: passwordText})))}
                        value={input.password}
                        placeholder={"Password"}
                        placeholderTextColor={'#551E18'}
                        secureTextEntry={secureText.securePassword}
                    />
                    <TouchableOpacity onPress={() => setSecureText(prevState => ({
                        ...prevState,
                        securePassword: !secureText.securePassword
                    }))} style={{marginRight: 2}}>
                        {secureText.securePassword ? <Feather name="eye" size={20} color={'#551E18'}/> :
                            <Feather name="eye-off" size={20} color={'#551E18'}/>
                        }
                    </TouchableOpacity>

                </View>
                <View style={styles.inputView}>
                    <Feather name="lock" size={20} color={'#551E18'}/>
                    <TextInput
                        style={[styles.input, {width: Dimensions.get("window").width * 0.75}]}
                        onChangeText={(confirmPasswordText => setInput(prevState => ({
                            ...prevState,
                            confirmPassword: confirmPasswordText
                        })))}
                        value={input.confirmPassword}
                        placeholder={"Confirm Password"}
                        placeholderTextColor={'#551E18'}
                        secureTextEntry={secureText.secureConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureText(prevState => ({
                        ...prevState,
                        secureConfirmPassword: !secureText.secureConfirmPassword
                    }))}
                                      style={{marginRight: 2}}>
                        {secureText.secureConfirmPassword ? <Feather name="eye" size={20} color={'#551E18'}/> :
                            <Feather name="eye-off" size={20} color={'#551E18'}/>
                        }
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
                <View style={styles.view}>
                    <Text style={styles.loginText}>Hesabın var mı?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate({name: 'Login'})}>
                        <Text style={[styles.loginText, {marginLeft: 2}]}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        alignSelf: "center", alignItems: "center", justifyContent: "center",
        backgroundColor: '#551E18', width: Dimensions.get("window").width, height: 50
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
        marginBottom: 10,

    },
    inputView: {
        width: Dimensions.get("window").width * 0.9,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 5,
        marginVertical: 5
    },
    input: {
        width: Dimensions.get("window").width * 0.8,
        paddingVertical: 10,
        paddingHorizontal: 2,
        color: '#551E18',
        fontFamily: 'SourceSansPro-Regular'
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
        fontFamily: 'SourceSansPro-Bold'

    },
    view: {
        marginTop: '10%',
        alignSelf: "center",
        flexDirection: 'row',
    },
    loginText: {
        fontFamily: 'SourceSansPro-Regular',
        color: '#551E18',
    },
    image: {
        width: 200,
        height: 30
    }
});
export default Register;