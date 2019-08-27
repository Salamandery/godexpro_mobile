import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import steel from './img/Steel.png';
import fire from './img/Fire.png';
import water from './img/Water.png';
import grass from './img/Grass.png';
import fighting from './img/Fighting.png';
import ghost from './img/Ghost.png';
import bug from './img/Bug.png';
import dragon from './img/Dragon.png';
import ice from './img/Ice.png';
import ground from './img/Ground.png';
import flying from './img/Flying.png';
import rock from './img/Rock.png';
import dark from './img/Dark.png';
import psychic from './img/Psychic.png';
import eletric from './img/Eletric.png';
import normal from './img/Normal.png';
import fairy from './img/Fairy.png';
import poison from './img/Poison.png';

import { Capitalize } from '../../components/StringTrataments';
import { StyleTheme } from './style';
export default CheckType = ({type, Ari = "default", theme}) => {
    
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    function getType(type) {
        switch(type) {
            case "steel": {
                return <Image style={styles.img} source={steel} />;
            }
            case "fire": {
                return <Image style={styles.img} source={fire} />;
            }
            case "water": {
                return <Image style={styles.img} source={water} />;
            }
            case "grass": {
                return <Image style={styles.img} source={grass} />;
            }
            case "fighting": {
                return <Image style={styles.img} source={fighting} />;
            }
            case "ghost": {
                return <Image style={styles.img} source={ghost} />;
            }
            case "bug": {
                return <Image style={styles.img} source={bug} />;
            }
            case "dragon": {
                return <Image style={styles.img} source={dragon} />;
            }
            case "ice": {
                return <Image style={styles.img} source={ice} />;
            }
            case "ground": {
                return <Image style={styles.img} source={ground} />;
            }
            case "flying": {
                return <Image style={styles.img} source={flying} />;
            }
            case "rock": {
                return <Image style={styles.img} source={rock} />;
            }
            case "dark": {
                return <Image style={styles.img} source={dark} />;
            }
            case "psychic": {
                return <Image style={styles.img} source={psychic} />;
            }
            case "electric": {
                return <Image style={styles.img} source={eletric} />;
            }
            case "normal": {
                return <Image style={styles.img} source={normal} />;
            }
            case "fairy": {
                return <Image style={styles.img} source={fairy} />;
            }
            case "poison": {
                return <Image style={styles.img} source={poison} />;
            }
            default: {
                return <Text style={styles.lbl}>{Capitalize(type)}</Text>
            }
        } 
    }
    return(
        <View>
            {
                getType(type)
            }
        </View>
    );
}