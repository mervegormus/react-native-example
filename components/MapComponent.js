import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {Dimensions, Image, Platform, StyleSheet, Text, View} from 'react-native'
import Geolocation from '@react-native-community/geolocation';

const MapComponent = () => {
    const mapRef = React.useRef()
    const [coord, setCoord] = useState({
        latitude: 36.9009009009009,
        longitude: 30.64307104453097,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
    });
    useEffect(() => {
        Geolocation.watchPosition(
            (position) => {
                console.log(position);
                setCoord(prevState => ({
                    ...prevState,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }));
            },
            (error) => {
                console.log(error);
            },
        );
    }, [])
    {/*<Marker coordinate={coord}>*/
    }
    {/*    <Callout>*/
    }
    {/*        <View>*/
    }
    {/*            <Text>Dolmabahçe sarayı</Text>*/
    }
    {/*        </View>*/
    }
    {/*    </Callout>*/
    }
    {/*</Marker>*/
    }
    {/*<Marker coordinate={coord} />*/
    }
    return (
        <MapView
            ref={mapRef}
            provider={Platform.OS === "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={coord}>
            <Marker coordinate={coord}
                    title={"Test"}
                    description={"testetst"}>
                <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            <Text style={styles.name}>merve</Text>
                            {/*<Text >Dmdkddmdmdlslsslskdfmkf</Text>*/}
                            <View>
                                <Image style={styles.image}
                                       source={require('../assets/header_image.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.arrowBorder}/>
                        <View style={styles.arrow}/>
                    </View>
                </Callout>
            </Marker>


        </MapView>
    );
    // return (<View style={styles.mapcontainer}>
    //         <MapView
    //             ref={mapRef}
    //             provider={Platform.OS === "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
    //             style={styles.map}
    //             initialRegion={{
    //                 latitude: 36.842046,
    //                 longitude: 30.599106,
    //                 latitudeDelta: 0.0922,
    //                 longitudeDelta: 0.0922
    //             }}
    //             followsUserLocation={true}
    //             showsMyLocationButton={false}
    //             showsPointsOfInterest={true}
    //             showUserLocation={true}
    //             showsCompass={false}>
    //             <Marker coordinate={{
    //                 latitude: 36.842046,
    //                 longitude: 30.599106,
    //             }}/>
    //         </MapView>
    //     </View>
    // );
};
const styles = StyleSheet.create({
    mapcontainer: {
        height: Dimensions.get("window").height * 0.5,
        width: Dimensions.get("window").width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        zIndex: -9999
    },
    name: {
        fontSize: 16,
        marginBottom: 5
    },
    bubble: {
        flexDirection: "column",
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150
    },
    arrow: {
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },
    arrowBorder: {
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5
    },
    image: {
        width: 120,
        height: 80
    }
})


export default MapComponent;