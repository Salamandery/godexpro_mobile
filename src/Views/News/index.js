import React from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import { normalize } from '../../components/StringTrataments';
import Events from '../../components/NewsAndEvents/Events';
import News from '../../components/NewsAndEvents/News';

export default createAppContainer(
    createBottomTabNavigator({
        Updates: { 
            screen: News,
            navigationOptions: {
                //tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={capture}></Image>
            }
        },
        Events: { 
            screen: Events,
            navigationOptions: {
                //tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={pokecenter}></Image>
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: true,
            swipeEnabled: true,
            animationEnabled: true
        },
    })
)

const styles = StyleSheet.create({
    img: {
        width: normalize(53), 
        height: normalize(53), 
        marginBottom: normalize(10)
    }
})