import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme() {
    return(
        StyleSheet.create({
            loadInfo: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, .8)"
            },
            text_load: {
                color: "#cccccc",
                fontSize: normalize(42),
                marginHorizontal: normalize(20),
            },
        })
    );
}