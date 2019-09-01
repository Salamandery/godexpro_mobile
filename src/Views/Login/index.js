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
const Login = ({navigation, dispatch}) => {
    const [user, setUser] = useState('');
    const [logged, setLogged] = useState(false);
    const [lang, setLang] = useState('en');

    async function loginHandler() {
        await AsyncStorage.setItem('user', user);

        navigation.navigate('Main', {username: user, theme: "false", lang});
    }
    async function getUser() {
        await getLang();
        await AsyncStorage.getItem('user').then(id => {
            if (id) {
                setLogged(true);
                try {
                    setUser(id);
                    getTheme(id);
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }
    async function getLang() {
        await AsyncStorage.getItem('lang').then(id => {
            if (id) {
                try {
                    setLang(id);
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }
    async function getTheme(user) {
        await AsyncStorage.getItem('ari').then(th=>{
            if (th) {
                dispatch(ToggleTheme("false", th, lang));
                navigation.navigate('Main', {username: user, theme: "false", Ari: th, lang});
            } else {
                AsyncStorage.getItem('theme').then(th=>{
                    if (th) {
                        dispatch(ToggleTheme(th, "default", lang));
                        navigation.navigate('Main', {username: user, theme: th, lang});
                    } else {
                        dispatch(ToggleTheme("false", "default", lang));
                        navigation.navigate('Main', {username: user, theme: "false", lang});
                    }
                });
            }
        });
    }
    useEffect(()=>{
        getUser();
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
                        <Text style={styles.lblinfo}>Olá, {user}. Obrigado por utilizar{"\n"}
                            <Image style={styles.logo} source={logo}></Image>
                        </Text>
                    </View>
                 ) : (
                    <View style={styles.grpLogin}>
                        <TextInput 
                            placeholder="Digite aqui seu usuário"
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

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(Login);