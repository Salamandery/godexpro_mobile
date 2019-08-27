import React from 'react';
import {
    View,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const Logout = ({navigation}) => {
    AsyncStorage.removeItem('user').then(()=>{
        navigation.navigate('Login');
    });
    return (
        <View>
            <Text>Deslogando...</Text>
        </View>
    );
}

export default Logout;