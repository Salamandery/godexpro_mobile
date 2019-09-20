import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text, 
    Image,
    TouchableOpacity 
} from 'react-native';
import botao from './botao.png';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import ToggleTheme from '../../services/actions';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import { translate } from '../../components/StringTrataments';

var translation = translate("Login");

const Login = ({navigation, theme, Ari, lang, dir, dispatch}) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
  
    async function loginHandler() {
        try {
            const mail = await firebase.auth().signInWithEmailAndPassword(user, pass);
            if (mail) {
                
                dispatch(ToggleTheme("false", "default", "en", "left"));
                
                await AsyncStorage.setItem('user', user);
                await AsyncStorage.setItem('theme', "false");
                await AsyncStorage.setItem('lang', "en");
                await AsyncStorage.setItem('dir', "left");
    
                navigation.navigate('Main', {username: user, theme: "false", lang: "en", dir: "left"});
            }
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <KeyboardAvoidingView style={styles.container}
                enabled={Platform.OS === 'ios'}
                behavior="padding"
        >
        <View style={styles.container}>
            <Text style={styles.label}>{translation[lang].labelEmail}</Text>
            <View style={styles.grpLogin}>
                <TextInput 
                    placeholder={translation[lang].placeholder}
                    placeholderTextColor="#999"
                    style={styles.input_login}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={user}
                    onChangeText={setUser}
                />
                <TextInput 
                    placeholder={translation[lang].Passplaceholder}
                    placeholderTextColor="#999"
                    style={styles.input_login}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={pass}
                    secureTextEntry={true}
                    onChangeText={setPass}
                />
                <Text style={styles.smlabel}>{translation[lang].labelForget}</Text>
                <TouchableOpacity  onPress={loginHandler}>
                    <Image style={styles.btn_login} source={botao}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Social</Text>
        </View>
        </KeyboardAvoidingView>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang, dir: state.themes.dir }))(Login);