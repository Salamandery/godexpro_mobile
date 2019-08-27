import React, { useState, useEffect } from 'react';
import { normalize } from '../../components/StringTrataments';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PkmController from '../PkmController';
import Settings from '../Settings';
import Contact from '../Contact';
import Itens from '../Itens';
import News from '../News';
import Help from '../Help';
import { StyleTheme } from './style';
import profile from '../Contact/logo.png';

const CustomContent = (props) => {
    const [theme, setTheme] = useState("false");
    const [Ari, setari] = useState("default");
    const [user, setUser] = useState('');
    if (Ari) {
        var styles = StyleTheme(theme, "ari");
        var bg = "#e699cc";
        var abg = "#f5d6eb";
    } else {
        var styles = StyleTheme(theme, "default");
        var bg = "#e6e6e6";
        var abg = "#a6a6a6";
    }
    useEffect(()=>{
        setari(props.navigation.state.params.Ari);
        setTheme(props.navigation.state.params.theme);
        setUser(props.navigation.state.params.username);
    }, []);
    function profileHandler() {
        return(
            <View style={styles.OptUser}>
                <TouchableOpacity onPress={props.navigation.navigate('Logout')}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={profile}></Image>
                </View>
                <View style={styles.profileInfo}>
                    <TouchableOpacity>
                        <Text style={styles.username}>{user}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.MenuItens}>
                <DrawerItems 
                    {...props}
                    activeTintColor={theme === 'false' ? "#333333" : "#cccccc"}
                    activeBackgroundColor={theme === 'false' ? abg : "#246175"}
                    inactiveTintColor={theme === 'false' ? "#333333" : "#cccccc"}
                    inactiveBackgroundColor={theme === 'false' ? bg : "#262626"}
                    labelStyle={{
                        fontSize: normalize(24)
                    }}
                />
            </View>
        </View>
    );
}

export default createAppContainer(
    createDrawerNavigator({
        Pokedex: { screen: PkmController },
        News: { screen: News },
        Itens: { screen: Itens },
        Help: { screen: Help },
        Contact: { screen: Contact },
        Settings: { screen: Settings },
    },
    {
        initialRouteName: "Pokedex",
        drawerPosition: "left",
        contentComponent: CustomContent,
    })
);
