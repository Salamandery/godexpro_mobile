import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === 'false') {
            return (StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#e6e6e6"
                    },
                    AjudaItens: {
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        alignSelf: "stretch",
                        justifyContent: "center",
                    }
                })
            );
        } else {
            return (StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#262626"
                    },
                    AjudaItens: {
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        alignSelf: "stretch",
                        justifyContent: "center",
                    }
                })
            ); 
        }
    } else {
        return (StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: "#e699cc"
                },
                AjudaItens: {
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    alignSelf: "stretch",
                    justifyContent: "center",
                }
            })
        );
    }
}