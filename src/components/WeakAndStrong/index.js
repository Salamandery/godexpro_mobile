import React from 'react';
import {
    Text,
    View
} from 'react-native';

import CheckType from '../../components/checkType';
import { translate } from '../../components/StringTrataments';
import { StyleTheme } from './style';

var translation = translate("PkmInfo");

export default WeakAndStrong = ({theme, Ari, pkm, lang}) => {
    
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    return(
        <View style={styles.groupAgainst}>
            <View style={styles.weakness}>
                <View style={styles.weakTitle}>
                    <Text style={styles.txtWeak}>{translation[lang].weak.title}</Text>
                </View>
                <View style={styles.weakItems}>
                    {
                        pkm.weaknesses.map((weak,index) =>(
                            <CheckType key={index} type={weak} theme={theme} Ari={Ari}/> 
                        ))
                    }
                </View>
            </View>
            <View style={styles.strongest}>
                <View style={styles.strongTitle}>
                    <Text style={styles.txtStrong}>{translation[lang].strong.title}</Text>
                </View>
                <View style={styles.strongItems}>
                    {
                        pkm.strongnst.map((strong,index) =>(
                            <CheckType key={index} type={strong} theme={theme} Ari={Ari}/> 
                        ))
                    }
                </View>
            </View>
        </View>
    );
}