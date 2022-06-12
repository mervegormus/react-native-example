import React, {useCallback, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, Image, SafeAreaView, Text, View} from 'react-native'

const CarouselComponent = (props:{data:any,renderItem:any}) => {
    const ref = useRef(null)
    const [activeIndex, setActiveIndex] =React.useState(0)

    return (
        <SafeAreaView>
                <View>
                    <Carousel
                        layout="default"
                        ref={ref}
                        data={props.data}
                        renderItem={props.renderItem}
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