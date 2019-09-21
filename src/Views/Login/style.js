import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme(theme, mode) {
    return (StyleSheet.create({
        container: {
            flex: 1,
            alignSelf: "stretch",
            backgroundColor: "#292929",
            flexDirection: "column",
            alignItems: "center"
        },
        grpLogin: {
            alignSelf: "stretch",
            backgroundColor: "#262626",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: normalize(10),
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(30),
            borderRadius: normalize(5)
        },
        btn_login: {
            height: normalize(55),
            width: normalize(64),
            marginHorizontal: normalize(5),
            marginTop: normalize(30)
        },
        label: {
            color: "#999",
            marginTop: normalize(5),
            fontSize: normalize(25),
            borderBottomWidth: 1,
            borderBottomColor: "#999",
            paddingBottom: normalize(6)
        },
        smlabel: {
            color: "#999",
            marginTop: normalize(5),
            fontSize: normalize(16),
            borderBottomWidth: 1,
            borderBottomColor: "#999",
            paddingBottom: normalize(2)
        },
        input_login: {
            width: "100%",
            borderColor: "#666",
            borderWidth: 1,
            borderRadius: normalize(4),
            textAlign: "center",
            height: normalize(50),
            fontSize: normalize(25),
            color: "#666",
            marginVertical: normalize(5)
        },
        logo: {
            width: normalize(300),
            height: normalize(80),
            marginVertical: normalize(30)
        },
        error: {
            padding: normalize(20),
            margin: normalize(50),
            borderWidth: 1.2,
            borderColor: "#991f00",
            color: "#991f00",
            fontWeight: "bold",
            backgroundColor: "#ffebe6"
        },
        googleBtn: { 
            width: 250, 
            height: 64, 
            marginTop: 10,
        }
    }));
}