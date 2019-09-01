
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import CheckWeather from './checkWeather';
import { translate } from '../../components/StringTrataments';
import { StyleTheme } from './style';

var translation = translate("PkmInfo");

const typeWeater = ({theme, Ari, pkm, lang}) => {
    
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
    
    return (
        <View style={styles.groupWeather}>
            <View style={styles.weather}>
                <Text style={styles.title}>{translation[lang].weather.title}</Text>
                <View style={styles.imgWrapper}>
                {   
                    pkm.types.map((tp, index)=>(
                        <CheckWeather key={index} setType={tp} theme={theme} Ari={Ari} />
                    ))
                }
                </View>
            </View>
        </View>
    );
}

export default typeWeater;
       