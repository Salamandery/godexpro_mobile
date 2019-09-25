import React from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import { translate } from '../../components/StringTrataments';

var translation = translate("Loading");

const Loading = ({lang}) => {
    var styles = StyleTheme();
    return(
        <View style={styles.loadInfo}>
            <Text style={styles.text_load}>{translation[lang].loading.title}</Text>
            <ActivityIndicator 
                size="large" 
                color="#cccccc"
                animating 
            />
        </View>
    );
}

export default connect(state => ({ lang: state.themes.lang }))(Loading);;