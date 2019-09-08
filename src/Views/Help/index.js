import React, { useState, useEffect } from 'react';
import {
    View
} from 'react-native';
import HeaderBar from '../../components/Header';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import { translate } from '../../components/StringTrataments';

var translation = translate("Help");

const Help = ({navigation, theme, Ari, lang}) => {
    
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={translation[lang].header} navigation={navigation} theme={theme}/>
            <View style={styles.AjudaItens}>

            </View>
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(Help);