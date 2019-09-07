import React, {
    
} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import HeaderBar from '../../components/Header';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import { StyleTheme } from './style';
const Contact = ({navigation, theme, Ari}) => {

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
    
    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={"Contact"} navigation={navigation} theme={theme}/>
            <View style={styles.ContactItens}>
                <View style={styles.imgContact}>
                    <Image style={styles.logo} source={theme === "false" ? logo1 : logo2 }></Image>
                </View>
                <View style={styles.DescriptionContainer}>
                    <Text style={styles.itens}>E-mail: godexpro@atomiccodes.org</Text>
                    <Text style={styles.itens}>Facebook: @facebook/GoDexPro</Text>
                    <Text style={styles.itens}>Twitter: @Twitter/GoDexPro</Text>
                    <Text style={styles.itens}>Instagram: @Instagram/GoDexPro</Text>
                    <Text style={styles.itens}>Website: www.atomiccodes.org</Text>
                </View>
            </View>
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari }))(Contact);