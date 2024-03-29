import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import CarouselComponent from "../../components/CarouselComponent";
import MyListComponent from "../../components/MyListComponent";

const slides = [
    {
        id: '1',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../../assets/image1.jpg')
    },
    {
        id: '2',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../../assets/image2.jpg')
    },
    {
        id: '3',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../../assets/image3.jpg')
    },
    {
        id: '4',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../../assets/image4.jpg')
    },
]
const Home = () => {
    const renderItem = useCallback(({item, index}) => {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: Dimensions.get("window").width,
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'cover',
                        width: Dimensions.get("window").width,
                        height: Dimensions.get('window').height * 0.3,
                    }}
                />

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        fontFamily:'SourceSansPro-Bold',
                        flexShrink: 1
                    }}>{item.title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            color: 'black',
                            textAlign: 'left',
                            flexShrink: 1,
                            fontFamily:'SourceSansPro-Light',
                        }}
                    >
                        {item.description}
                    </Text>
                </View>
            </View>
        )
    }, [])

    return (<View style={styles.container}>
            <CarouselComponent data={slides} renderItem={renderItem}/>
            <Text style={styles.text}>Yemekler</Text>
            <MyListComponent/>
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