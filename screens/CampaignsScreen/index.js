import React, {useContext, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import Context from "../../Context";
import LottieView from 'lottie-react-native'
import campaignsData from "./campaignsData";
import ModalComponent from "../../components/ModalComponent";

const Campaigns = () => {
    const {setModalVisible} = useContext(Context)
    const data = campaignsData
    const [propData, setPropData] = useState({
        title: "",
        description: "",
        price: "",
        image: null
    })
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                source={require('../../assets/lottie/gift.json')}
                style={{
                    width: Dimensions.get("window").width * 0.75,
                    zIndex: 50,
                    alignSelf: "center",
                    marginTop: 5
                }}
                speed={1.5}
            />
            <ModalComponent dataTitle={propData.title} dataDescription={propData.description} dataPrice={propData.price}
                            dataImage={propData.image}/>
            <Text style={styles.text}>Kampanyalar</Text>
            <ScrollView>
                <View style={{margin: 10}}>
                    {data.map((item, index) =>
                        <View key={index}>
                            <View key={index} style={styles.view}>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.textDescription}>{item.description}</Text>
                                <Text style={styles.click} onPress={() => {
                                    setPropData(prevState => ({
                                        ...prevState,
                                        title: item.title,
                                        description: item.description,
                                        price: item.price,
                                        image: item.image
                                    }))
                                    setModalVisible(true)
                                }}> Detaylar için
                                    tıklayınız</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 0.7,
                                    borderColor: '#F8F2F1',
                                    width: '100%',
                                    alignSelf: 'center',
                                    height: 0,
                                    opacity: 0.7
                                }}
                            />
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        backgroundColor: '#d5aeaa',
        // width: Dimensions.get("window").width,
        padding: 10,
        borderRadius: 10
    },
    text: {
        alignSelf: "center",
        fontSize: 18,
        color: '#775451',
        fontFamily: 'SourceSansPro-SemiBold',
        marginBottom: 5
    },
    textDescription: {
        fontSize: 14,
        color: '#F8F2F1',
        flexShrink: 1,
        fontFamily: 'SourceSansPro-Regular',
        marginTop: 5
    },
    click: {
        fontSize: 10,
        flexShrink: 1,
        fontFamily: 'SourceSansPro-Light',
        alignSelf: "flex-end"
    }
})

export default Campaigns;