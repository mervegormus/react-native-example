import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {
    Animated,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import StarRate from "./StarRating";

const MapComponent = () => {
    const Images = [
        {image: require('../assets/image1.jpg')},
        {image: require('../assets/image2.jpg')},
        {image: require('../assets/image3.jpg')},
        {image: require('../assets/image4.jpg')}
    ]
    const markers = [
        {
            coordinate: {
                latitude: 36.9009009009009,
                longitude: 30.64307104453097,
            },
            title: "Amazing Food Place",
            description: "This is the best food place",
            image: Images[0].image,
            rating: 3.8,
            reviews: 99
        },
        {
            coordinate: {
                latitude: 36.9009009009008,
                longitude: 30.64307104453097,
            },
            title: "Amazing Food Place Place Place",
            description: "This is the best food place Place",
            image: Images[1].image,
            rating: 2.5,
            reviews: 99
        },
        {
            coordinate: {
                latitude: 36.9009009009006,
                longitude: 30.64307104453097,
            },
            title: "Amazing Food Place",
            description: "This is the best food place",
            image: Images[2].image,
            rating: 3,
            reviews: 99
        },
        {
            coordinate: {
                latitude: 36.9009009009007,
                longitude: 30.64307104453097,
            },
            title: "Amazing Food Place",
            description: "This is the best food place",
            image: Images[3].image,
            rating: 4,
            reviews: 99
        },

    ]
    const [state, setState] = useState({
        markers,
        categories: [
            {
                name: 'Fastfood Center',
                icon: <Ionicons name="fast-food-outline" size={18} color="black"/>
            },
            {
                name: 'Restaurant',
                icon: <MaterialCommunityIcons name="food-fork-drink" size={18} color="black"/>
            },
            {
                name: 'Hotel',
                icon: <Fontisto name="hotel" size={18} color="black"/>
            },
            {
                name: 'Cafe',
                icon: <Ionicons name="cafe-outline" size={18} color="black"/>
            },
        ]
    })
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

    return (<SafeAreaView style={{flex: 1}}>
            <MapView
                ref={mapRef}
                provider={Platform.OS === "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
                style={styles.mapContainer}
                initialRegion={coord}>
                <Marker coordinate={coord}
                        title={"Test"}
                        description={"testetst"}>
                    <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                                <Text style={styles.name}>Lorem lorem</Text>
                                <View>
                                    <Image style={styles.image}
                                           source={require('../assets/header.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.arrowBorder}/>
                            <View style={styles.arrow}/>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.searchBox}>
                <TextInput
                    placeholder={"Search here"}
                    placeholderTextColor={"#000"}
                    autoCapitalize={"none"}
                    style={{flex: 1, padding: 0}}
                />
                <Ionicons name='ios-search' size={20}/>
            </View>
            <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={50}
                style={styles.chipsScrollView}
                //for ios
                // contentInset={{
                //     top:0,
                //     left:0,
                //     bottom:0,
                //     right:20
                // }}
                contentContainerStyle={{
                    paddingRight: Platform.OS === "android" ? 20 : 0
                }}
            >
                {state.categories.map((category, index) =>
                    (<TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text>{category.name}</Text>
                    </TouchableOpacity>)
                )}
            </ScrollView>
            <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                {state.markers.map((marker, index) => (
                    <View style={styles.card} key={index}>
                        <Image source={marker.image}
                               style={styles.cardImage}
                               resizeMode={"cover"}
                        />
                        <StarRate  rate={marker.rating}/>
                        <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardTitle}>
                                {marker.title}
                            </Text>
                            <Text numberOfLines={1} style={styles.cardDescription}>
                                {marker.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        </SafeAreaView>
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
    mapContainer: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
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
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: "center",
        borderRadius: 5,
        padding: 10,
        shadowColor: "#ccc",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10
    },
    chipsScrollView: {
        position: "absolute",
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: "#ccc",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {},
    card: {
        elevation: 2,
        backgroundColor: '#fff',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: {x: 2, y: -2},
        height: 200,
        width: 300,
        overflow: "hidden"
    },
    cardImage: {
        flex: 3,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardTitle: {
        fontSize: 12,
        color: '#444',
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 30,
        height: 30
    },
    button: {
        alignItems: "center",
        marginTop: 5
    },
    signIn: {
        width: '100%',
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})


export default MapComponent;