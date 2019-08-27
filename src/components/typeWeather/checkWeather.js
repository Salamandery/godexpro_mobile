import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import clear from './img/clear.png';
import cloudy from './img/cloudy.png';
import pcloud from './img/pcloud.png';
import fog from './img/fog.png';
import rain from './img/rain.png';
import sunny from './img/sunny.png';
import windy from './img/windy.png';
import snow from './img/snow.png';
import { StyleTheme } from './style';
import { Capitalize } from '../../components/StringTrataments';
export default CheckWeather = ({setType, theme, Ari}) =>{
    
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
    
    function getType(types){
        switch(types) {
            case "fire": {
                return (
                    <View style={{flexDirection: "row"}}>
                        <Image style={styles.ico} source={clear}></Image>
                        <Image style={styles.ico} source={sunny}></Image>
                    </View>
                    );
            }
            case 'grass': {
                return (
                    <View style={{flexDirection: "row"}}>
                        <Image style={styles.ico} source={clear}></Image>
                        <Image style={styles.ico} source={sunny}></Image>
                    </View>
                );
            }
            case 'ground': {
                return (
                    <View style={{flexDirection: "row"}}>
                        <Image style={styles.ico} source={clear}></Image>
                        <Image style={styles.ico} source={sunny}></Image>
                    </View>
                );
            }
            case 'normal': {
                return <Image style={styles.ico} source={pcloud}></Image>
            }
            case 'rock': {
                return <Image style={styles.ico} source={pcloud}></Image>
            }
            case 'fairy': {
                return <Image style={styles.ico} source={cloudy}></Image>
            }
            case 'fighting': {
                return <Image style={styles.ico} source={cloudy}></Image>
            }
            case 'poison': {
                return <Image style={styles.ico} source={cloudy}></Image>
            }
            case 'electric': {
                return <Image style={styles.ico} source={rain}></Image>
            }
            case 'water': {
                return <Image style={styles.ico} source={rain}></Image>
            }
            case 'bug': {
                return <Image style={styles.ico} source={rain}></Image>
            }
            case 'ice': {
                return <Image style={styles.ico} source={snow}></Image>
            }
            case 'steel': {
                return <Image style={styles.ico} source={snow}></Image>
            }
            case 'dark': {
                return <Image style={styles.ico} source={fog}></Image>
            }
            case 'ghost': {
                return <Image style={styles.ico} source={fog}></Image>
            }
            case 'dragon': {
                return <Image style={styles.ico} source={windy}></Image>
            }
            case 'flying': {
                return <Image style={styles.ico} source={windy}></Image>
            }
            case 'psychic': {
                return <Image style={styles.ico} source={windy}></Image>
            }
            default: {
                return <Text>{Capitalize(types)}</Text>
            }
        }
    }
    return(
        <View>
            {
                getType(setType)
            }
        </View>
    );
}