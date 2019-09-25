import AsyncStorage from '@react-native-community/async-storage';
import React, { 
    useState, 
    useEffect 
} from 'react';
import { 
     ImageBackground,
     Text, 
     View,
     Image,
     StyleSheet, 
     KeyboardAvoidingView,
     StatusBar
} from 'react-native';
import { 
    ToggleTheme, 
    ToggleUserInfo
} from '../../services/actions';
import logo from './godexpro.png';
import bg from './0.png';
import api from '../../services/api';
import { normalize } from '../../components/StringTrataments';
import { connect } from 'react-redux';

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

const Splash = ({navigation, dispatch, lang = "en", username, paid, photo}) => {

    const [logged, setLogged] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            ifLogged();
        }, 2000);
    },[]);
    
    async function getUser() {
        var usr = await AsyncStorage.getItem('user');

        if (usr) {
            const mail = JSON.parse(usr);
            try {
                const verify = await api.post('/userinfo', {
                    email: mail.email
                });
                AsyncStorage.setItem('user', JSON.stringify(verify.data.user));
                return verify.data.user;
            } catch(err){
                console.log(err);
                return usr ? JSON.parse(usr) : undefined;
            }
        }
    }
    async function getDir() {
        const dr = await AsyncStorage.getItem('dir');
        return dr === undefined ? "left" : dr; 
    }
    async function getTheme(user, dir = "left") {
        setLogged(true);

        dispatch(ToggleUserInfo(user.name, user.paid, user.photo, user.email));
        
        await AsyncStorage.getItem('ari').then(th=>{
            if (th) {
                dispatch(ToggleTheme("false", th, user.lang, dir));
                navigation.navigate('Main', {user: user, theme: "false", Ari: th, lang: user.lang, dir});
            } else {
                AsyncStorage.getItem('theme').then(th=>{
                    if (th) {
                        dispatch(ToggleTheme(th, "default", user.lang, dir));
                        navigation.navigate('Main', {user: user, theme: th, lang: user.lang, dir});
                    } else {
                        dispatch(ToggleTheme("false", "default", user.lang, dir));
                        navigation.navigate('Main', {user: user, theme: "false", lang: user.lang, dir});
                    }
                });
            }
        });
    }
    async function ifLogged() {
        const usr = await getUser();

        if (usr) {
            const direction = await getDir();
            await getTheme(usr, direction);
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
                    null
                 )
             }

        </ImageBackground>
        <StatusBar barStyle="light-content" backgroundColor={"#cc0000"} />
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

export default connect(state => ({ 
    theme: state.themes.theme, 
    Ari: state.themes.Ari, 
    lang: state.themes.lang, 
    dir: state.themes.dir,
    username: state.userinfo.username, 
    photo: state.userinfo.photo, 
    paid: state.userinfo.paid,
    email: state.userinfo.email 
}))(Splash);