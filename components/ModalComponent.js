import React, {useContext} from "react";
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Context from "../Context";
import { SimpleLineIcons } from '@expo/vector-icons';
const ModalComponent = (props: { dataTitle: string, dataDescription: string, dataPrice?: string, dataImage?: any }) => {
    const {modalVisible, setModalVisible} = useContext(Context)
    const {dataTitle, dataDescription, dataPrice, dataImage} = props
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{alignSelf:"flex-end"}}
                                onPress={() => setModalVisible(!modalVisible)}>
                            <SimpleLineIcons name="close" size={30} color="#d05a50" />
                        </TouchableOpacity>
                        <Text style={styles.text}>{dataTitle}</Text>
                        <Image
                            source={dataImage}
                            style={{
                                width: 200,
                                height: 200
                            }}
                        />
                        <Text style={styles.textDescription}>{dataDescription}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color:'white'}}>Satın Al</Text>
                            <Text style={{color:'white'}}>{dataPrice}₺</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        alignSelf: "center",
        fontSize: 18,
        color: '#d05a50',
        fontFamily: 'SourceSansPro-SemiBold',
        marginVertical: 5
    },
    textDescription: {
        fontSize: 14,
        color: '#625c5b',
        flexShrink: 1,
        fontFamily: 'SourceSansPro-Regular',
        marginTop: 5
    },
    button: {
        backgroundColor: '#78bce0',
        padding: 2,
        borderRadius: 20,
        alignItems:"center",
        justifyContent:"center",
        width:120,
        alignSelf:"flex-end"
    }
});

export default ModalComponent;