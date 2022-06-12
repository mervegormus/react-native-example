import * as React from 'react';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {View, ScrollView, StyleSheet} from "react-native";

const MyListComponent = () => {
    return (<View style={styles.container}>
            <ScrollView>
                <List.Accordion
                    title="Çorbalar"
                    titleStyle={{color: '#551E18'}}
                    left={props => <List.Icon {...props}
                                              icon={() => <Icon name="bowl" size={24} color="#551E18"/>}/>}

                >
                    <List.Item title="Mercimek Çorbası"/>
                    <List.Item title="Domates Çorbası"/>
                </List.Accordion>
                <List.Accordion
                    title="Ana Yemekler"
                    titleStyle={{color: '#551E18'}}
                    left={props => <List.Icon {...props}
                                              icon={() => <MaterialCommunityIcons name="food-turkey" size={24}
                                                                                  color="#551E18"/>}/>}
                >
                    <List.Item title="Tavuk Sote"/>
                    <List.Item title="Saç Kavurma"/>
                </List.Accordion>
                <List.Accordion
                    title="Tatlılar"
                    titleStyle={{color: '#551E18'}}
                    left={props => <List.Icon {...props}
                                              icon={() => <MaterialCommunityIcons name="cake-variant" size={24}
                                                                                  color="#551E18"/>}/>}
                >
                    <List.Item title="Kek"/>
                    <List.Item title="Sütlaç"/>
                    <List.Item title="Baklava"/>
                </List.Accordion>
                <List.Accordion
                    title="İçecekler"
                    titleStyle={{color: '#551E18'}}
                    left={props => <List.Icon {...props}
                                              icon={() => <MaterialCommunityIcons name="cup" size={24}
                                                                                  color="#551E18"/>}/>}
                >
                    <List.Item title="Çay"/>
                    <List.Item title="Kahve"/>
                    <List.Item title="Süt"/>
                </List.Accordion>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
export default MyListComponent;