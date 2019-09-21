import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text, 
    Image,
    TouchableOpacity 
} from 'react-native';
import { 
    GoogleSignin, 
    GoogleSigninButton 
} from 'react-native-google-signin';
import botao from './botao.png';
import logo from './godexpro.png';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import ToggleTheme from '../../services/actions';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import { translate } from '../../components/StringTrataments';

var translation = translate("Login");

GoogleSignin.configure();

const Login = ({navigation, theme, Ari, lang, dir, dispatch}) => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState('');
    const [profile, setProfile] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [load, setLoad] = useState(false);
    const [error, setError] = useState({});

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
  
    async function loginHandler() {
        try {
            const mail = await firebase.auth().signInWithEmailAndPassword(user, pass);
            if (mail) {
                navigation.navigate('Main', {username: user, theme: "false", lang: "en", dir: "left"});
            }
        } catch(err) {
            console.log(err);
        }
    }
    async function setUserConfig(user) {
        dispatch(ToggleTheme("false", "default", "en", "left"));
                
        await AsyncStorage.setItem('user', user);
        await AsyncStorage.setItem('theme', "false");
        await AsyncStorage.setItem('lang', "en");
        await AsyncStorage.setItem('dir', "left");
    }
    async function _signIn(){
        setLoad(true);

        try {
            await GoogleSignin.hasPlayServices();

            const { user } = await GoogleSignin.signIn();

            setUserInfo(user);

            setUserConfig(JSON.stringify(user));
            
            setLoad(false);

            navigation.navigate('Main', {user: user, theme: "false", lang: "en", dir: "left"});

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            setLoad(false);
        }
    }
    return(
        <KeyboardAvoidingView style={styles.container}
                enabled={Platform.OS === 'ios'}
                behavior="padding"
        >
            <View style={styles.container}>
                <Image style={styles.logo} source={logo} />
                
                <Text style={styles.label}>Social</Text>
                <GoogleSigninButton
                    style={{ width: 192, height: 48, marginTop: 10 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={_signIn}
                    disabled={load} 
                />
            </View>
            { error ? <Text>{error}</Text> : null }
        </KeyboardAvoidingView>
    );
}
/* 
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
*/
export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang, dir: state.themes.dir }))(Login);