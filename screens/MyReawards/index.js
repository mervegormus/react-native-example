import React, {useCallback} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import CarouselComponent from "../../components/CarouselComponent";

const MyRewards = () => {
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

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'pink'}}>
            <CarouselComponent renderItem={renderItem}/>
        </View>
    )
};

export default MyRewards;