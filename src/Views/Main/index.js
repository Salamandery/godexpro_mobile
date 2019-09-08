import React, { useState, useEffect } from 'react';
import { normalize } from '../../components/StringTrataments';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import PkmController from '../PkmController';
import Settings from '../Settings';
import Contact from '../Contact';
import Itens from '../Itens';
import News from '../News';
import Help from '../Help';
import { StyleTheme } from './style';
import profile1 from '../Contact/logo1.png';
import profile2 from '../Contact/logo2.png';
import storage from '@react-native-community/async-storage';

const CustomContent = (props) => {
    const [theme, setTheme] = useState("false");
    const [Ari, setari] = useState("default");
    const [user, setUser] = useState('');
    const [lang, setLang] = useState('en');
    
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
        setLang(props.navigation.state.params.lang);
        props.navigation.setParams({lang});
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
                    <Image style={styles.img} source={ theme === "false" ? profile1 : profile2 }></Image>
                </View>
                <View style={styles.profileInfo}>
                    <TouchableOpacity>
                        <Text style={styles.username}>{user}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.MenuItens}>
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
            </ScrollView>
        </View>
    );
}

const PokeNavigation = () => {
    const lang = storage.getItem('lang');
    return {
        title:  lang === "en" ? "Pokédex" : "Pokémon"
    }
}
const NewsNavigation = () => {
    const lang = storage.getItem('lang');
    return {
        title:  lang === "en" ? "News" : "Notícias"
    }
}
const ItemsNavigation = () => {
    const lang = storage.getItem('lang');
    return {
        title:  lang === "en" ? "Item List" : "Lista de Itens"
    }
}
const GuideNavigation = () => {
    const lang = storage.getItem('lang');
    return {
        title:  lang === "en" ? "Guide" : "Guia"
    }
}
const ContactNavigation = () => {
    const lang = storage.getItem('lang');
    return {
        title:  lang === "en" ? "Contact" : "Contato"
    }
}
const SettingsNavigation = () => {
    const lang = storage.getItem('lang');
    return {
        title:  lang === "en" ? "Settings" : "Configurações"
    }
}
const Drawer = createDrawerNavigator({
    Pokedex: { 
        screen: PkmController,
        navigationOptions: PokeNavigation
    }, 
    News: { 
        screen: News,
        navigationOptions: NewsNavigation
    },
    Itens: { 
        screen: Itens,
        navigationOptions: ItemsNavigation 
    },
    Guide: { 
        screen: Help,
        navigationOptions: GuideNavigation 
    },
    Contact: { 
        screen: Contact,
        navigationOptions: ContactNavigation 
    },
    Settings: { 
        screen: Settings,
        navigationOptions: SettingsNavigation 
    },
},
{
    initialRouteName: "Pokedex",
    drawerPosition: "right",
    contentComponent: CustomContent,
});

const Container = createAppContainer(Drawer);

export default Container;
