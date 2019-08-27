
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import CheckWeather from './checkWeather';
import { StyleTheme } from './style';
const typeWeater = ({theme, Ari, pkm}) => {
    
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
    
    return (
        <View style={styles.groupWeather}>
            <View style={styles.weather}>
                <Text style={styles.title}>Weather</Text>
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
       