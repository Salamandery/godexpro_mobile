import React from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import { StyleTheme } from './style';

const Loading = () => {
    var styles = StyleTheme();
    return(

        <View style={styles.loadInfo}>
            <Text style={styles.text_load}>Carregando...</Text>
            <ActivityIndicator 
                size="large" 
                color="#cccccc"
                animating 
            />
        </View>
    );
}

export default Loading;