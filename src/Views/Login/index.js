import React, { 
    useState, 
    useEffect 
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { 
     ImageBackground,
     Text, 
     View,
     Image,
     TextInput,
     StyleSheet, 
     KeyboardAvoidingView, 
     TouchableOpacity 
} from 'react-native';
import logo from './godexpro.png';
import botao from './botao.png';
import bg from './0.png';
import { normalize } from '../../components/StringTrataments';
import { connect } from 'react-redux';
import ToggleTheme from '../../services/actions';

var translation = {
    welcome: {
        en: {
            title: "Welcome to ",
            placeholder: "Type your username"
        },
        pt: {
            title: "Seja bem-vindo ao ",
            placeholder: "Digite seu usuário"
        }
    },
}

const Login = ({navigation, dispatch, lang}) => {

    const [user, setUser] = useState('');
    const [logged, setLogged] = useState(false);

    async function loginHandler() {

        await AsyncStorage.setItem('user', user);
        await AsyncStorage.setItem('theme', "false");
        await AsyncStorage.setItem('ari', "default");
        await AsyncStorage.setItem('lang', "en");
        await AsyncStorage.setItem('dir', "left");

        dispatch(ToggleTheme("false", "default", "en", "left"));

        navigation.navigate('Main', {username: user, theme: "false", lang: "en", dir: "left"});
    }
    async function getUser() {
        const usr = await AsyncStorage.getItem('user');
        return usr;
    }
    async function getLang() {
        const lan = await AsyncStorage.getItem('lang');
        return lan === undefined ? "en" : lan;
    }
    async function getDir() {
        const dr = await AsyncStorage.getItem('dir');
        return dr;
    }
    async function getTheme(user, language = "en", dir = "left") {
        setLogged(true);
        await AsyncStorage.getItem('ari').then(th=>{
            if (th) {
                dispatch(ToggleTheme("false", th, language, dir));
                navigation.navigate('Main', {username: user, theme: "false", Ari: th, lang: language, dir});
            } else {
                AsyncStorage.getItem('theme').then(th=>{
                    if (th) {
                        dispatch(ToggleTheme(th, "default", language, dir));
                        navigation.navigate('Main', {username: user, theme: th, lang: language, dir});
                    } else {
                        dispatch(ToggleTheme("false", "default", language, dir));
                        navigation.navigate('Main', {username: user, theme: "false", lang: language, dir});
                    }
                });
            }
        });
    }
    async function ifLogged() {
        const usr = await getUser();
        const lan = await getLang();
        const direction = await getDir();
        await getTheme(usr, lan, direction);
    }
    useEffect(()=>{
        ifLogged();
    },[]);
    return(
        <KeyboardAvoidingView style={styles.container}
                              enabled={Platform.OS === 'ios'}
                              behavior="padding"
        >
        <ImageBackground source={bg} style={styles.bg}>
             {
                 logged ? (
                    <View style={styles.info}>
                        <Text style={styles.lblinfo}>{translation.welcome[lang].title}{"\n"}
                            <Image style={styles.logo} source={logo}></Image>
                        </Text>
                    </View>
                 ) : (
                    <View style={styles.grpLogin}>
                        <TextInput 
                            placeholder={translation.welcome[lang].placeholder}
                            placeholderTextColor="#FFF"
                            style={styles.input_login}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={user}
                            onChangeText={setUser}
                        />
                        <TouchableOpacity  onPress={loginHandler}>
                            <Image style={styles.btn_login} source={botao}></Image>
                        </TouchableOpacity>
                    </View>
                 )
             }

        </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: normalize(60),
        width: normalize(240)
    },
    bg: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center"
    },  
    container: {
        flex: 1,
    },
    grpLogin: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(150)
    },
    btn_login: {
        height: normalize(55),
        width: normalize(64),
        marginHorizontal: normalize(5)
    },
    btn_label: {
        color: "#FFF",
        fontSize: normalize(25)
    },
    input_login: {
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: normalize(4),
        textAlign: "center",
        width: '70%',
        height: normalize(50),
        fontSize: normalize(25),
        color: "#FFF"
    },
    info: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .8)"
    },
    lblinfo: {
        color: "#FFF",
        fontSize: normalize(42),
        marginHorizontal: normalize(30),
        textAlign: "center",
        padding: normalize(20)
    }
})

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang, dir: state.themes.dir }))(Login);