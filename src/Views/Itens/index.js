import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import { normalize } from '../../components/StringTrataments';
import Capture from '../../components/ItemList/Capture';
import Potion from '../../components/ItemList/Potion';
import Lvlup from '../../components/ItemList/lvlup';
import Store from '../../components/ItemList/Store';
import Eggs from '../../components/ItemList/Eggs';
import pokecenter from './img/Pokemoncenter.png';
import Incubator from './img/Incubatoreggsymbol.png';
import capture from './img/po.png';
import store from './img/Loja.png';
import lvl from './img/LVL.png';
export default createAppContainer(
    createBottomTabNavigator({
        "Capture Items": { 
            screen: Capture,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={capture}></Image>
            }
        },
        Potions: { 
            screen: Potion,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={pokecenter}></Image>
            }
        },
        Eggs: { 
            screen: Eggs,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={Incubator}></Image>
            }
        },
        "Level up": { 
            screen: Lvlup,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={lvl}></Image>
            }
        },
        "Store Items": { 
            screen: Store,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={store}></Image>
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: false,
            swipeEnabled: true,
            animationEnabled: true
        }
    })
)

const styles = StyleSheet.create({
    img: {
        width: normalize(53), 
        height: normalize(53), 
        marginBottom: normalize(10)
    }
})