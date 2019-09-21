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
     StyleSheet, 
     KeyboardAvoidingView,
} from 'react-native';
import logo from './godexpro.png';
import bg from './0.png';
import { normalize } from '../../components/StringTrataments';
import { connect } from 'react-redux';
import ToggleTheme from '../../services/actions';

var translation = {
    welcome: {
        en: {
            title: "Welcome to ",
        },
        pt: {
            title: "Seja bem-vindo ao ",
        }
    },
}

const Splash = ({navigation, dispatch, lang = "en"}) => {
    const [logged, setLogged] = useState(false);
    useEffect(()=>{
        ifLogged();
    },[]);
    async function getUser() {
        const usr = await AsyncStorage.getItem('user');
        return usr === undefined ? " " : usr;
    }
    async function getLang() {
        const lan = await AsyncStorage.getItem('lang');
        return lan === undefined ? "en" : lan;
    }
    async function getDir() {
        const dr = await AsyncStorage.getItem('dir');
        return dr === undefined ? "left" : dr; 
    }
    async function getTheme(user, language = "en", dir = "left") {
        setLogged(true);
        await AsyncStorage.getItem('ari').then(th=>{
            if (th) {
                dispatch(ToggleTheme("false", th, language, dir));
                navigation.navigate('Main', {user: JSON.parse(user), theme: "false", Ari: th, lang: language, dir});
            } else {
                AsyncStorage.getItem('theme').then(th=>{
                    if (th) {
                        dispatch(ToggleTheme(th, "default", language, dir));
                        navigation.navigate('Main', {user: JSON.parse(user), theme: th, lang: language, dir});
                    } else {
                        dispatch(ToggleTheme("false", "default", language, dir));
                        navigation.navigate('Main', {user: JSON.parse(user), theme: "false", lang: language, dir});
                    }
                });
            }
        });
    }
    async function ifLogged() {
        const usr = await getUser();
        if (usr) {
            const lan = await getLang();
            const direction = await getDir();
            await getTheme(usr, lan, direction);
        } else {
            navigation.navigate('Login');
        }
    }
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
                    <View></View>
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

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang, dir: state.themes.dir }))(Splash);