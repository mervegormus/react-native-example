import React from 'react';
import StarRating from "react-native-star-rating";
import {Dimensions, StyleSheet, Text, View} from 'react-native'

const StarRate = (prop:{rate:number}) => {
    // const [starCount, setStarCount] = React.useState(0)
    // const onStarRatingPress = (rating) => {
    //     setStarCount(rating)
    // }
    return (<View style={styles.view}>
            <Text style={styles.text}>Puan</Text>
            <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                starSize={20}
                rating={prop.rate}
                // selectedStar={(rating) => onStarRatingPress(rating)}
                fullStarColor={'#d05a50'}
                starStyle={{
                    marginHorizontal: 5
                }}
            />
            <Text style={styles.rate}>{prop.rate}/5</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    text: {
        fontSize: 16,
        fontFamily: 'SourceSansPro-SemiBoldItalic'
    },
    rate: {
        fontSize: 12,
        alignSelf:'flex-end',
        fontFamily: 'SourceSansPro-Light'
    }
})
export default StarRate;