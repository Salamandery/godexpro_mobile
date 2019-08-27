import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === "false") {
            return (
                StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#e6e6e6"
                    },
                    ItemItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(10),
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        flexWrap: "wrap"
                    },
                })
            );
        } else {
            return (
                StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#262626"
                    },
                    ItemItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(10),
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        flexWrap: "wrap"
                    },
                })
            ); 
        }
    } else {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: "#e699cc",
                },
                ItemItens: {
                    paddingVertical: normalize(10),
                    paddingHorizontal: normalize(10),
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    flexWrap: "wrap"
                },
            })
        );
    }
}