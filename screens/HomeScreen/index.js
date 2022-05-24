import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import CarouselComponent from "../../components/CarouselComponent";
import StarRate from "../../components/StarRate";
import MyListComponent from "../../components/MyListComponent";

const Home = () => {

    return (<View style={styles.container}>
            <CarouselComponent/>
            <Text style={styles.text}>Yemekler</Text>
            <MyListComponent/>
            {/*<StarRate/>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        alignSelf: "center",
        fontSize: 18,
        color: '#775451',
        fontFamily: 'SourceSansPro-SemiBold',
        marginVertical: 10
    },
})

export default Home;