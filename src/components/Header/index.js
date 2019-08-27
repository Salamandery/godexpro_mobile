import React, {
    useState,
    useEffect
} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import logo from '../../default/godexpro.png';
import btn_menu from '../../default/menu.png';
import { StyleTheme } from './style';

const HeaderBar = ({Headertitle, navigation, theme})=>{
    const [user, setUser] = useState('');
    var styles = StyleTheme(theme);

    function menuHangler() {
        navigation.toggleDrawer();
    }
    function defaultFeature() {
        return (
            Headertitle ? (
                <Text style={styles.Title}>{Headertitle}</Text>
            ) : (
                <Image style={styles.logo} source={logo}></Image>
            )
        );
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.menu} onPress={menuHangler} activeOpacity={1}>
                <Image style={styles.btn_menu} source={btn_menu}></Image>
            </TouchableOpacity>
            {   
                defaultFeature()
            }
            <Text style={styles.appid}>{user}</Text>
        </View>
    );
}

export default HeaderBar;