import React, {useCallback, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, Image, SafeAreaView, Text, View} from 'react-native'

const slides = [
    {
        id: '1',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../assets/image1.jpg')
    },
    {
        id: '2',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../assets/image2.jpg')
    },
    {
        id: '3',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../assets/image3.jpg')
    },
    {
        id: '4',
        title: 'Lorem ipsum',
        description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem',
        image: require('../assets/image4.jpg')
    },
]
const CarouselComponent = () => {
    const ref = useRef(null)
    const [activeIndex, setActiveIndex] =React.useState(0)

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
        <SafeAreaView>
                <View>
                    <Carousel
                        layout="default"
                        ref={ref}
                        data={slides}
                        renderItem={renderItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        onSnapToItem={(index) => setActiveIndex(index)}
                        enableMomentum={true}
                        enableSnap={true}
                        centerContent={true}
                        autoplay={true}
                        loop={true}
                    />
            </View>
        </SafeAreaView>
    );
};

export default CarouselComponent;