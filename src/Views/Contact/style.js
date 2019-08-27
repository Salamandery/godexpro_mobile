import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === "false") {
            return (
                StyleSheet.create({
                    logo: {
                        height: "50%",
                        width: "100%"
                    },
                    container: {
                        flex: 1,
                        backgroundColor: "#e6e6e6"
                    },
                    imgContact: {
                        height: normalize(300),
                        width: normalize(300),
                        marginTop: normalize(20),
                        borderRadius: normalize(150),
                        borderWidth: 1,
                        borderColor: "#bfbfbf",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    ContactItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(20),
                        alignSelf: "stretch",
                        justifyContent: "center",
                    },
                    DescriptionContainer: {
                        padding: normalize(20),
                        backgroundColor: "#ffffff",
                        marginTop: normalize(20),
                    },
                    itens: {
                        fontSize: normalize(18),
                        color: "#333333"
                    },
                })
            );
        } else {
            return (
                StyleSheet.create({
                    logo: {
                        height: "50%",
                        width: "100%"
                    },
                    container: {
                        flex: 1,
                        backgroundColor: "#262626"
                    },
                    imgContact: {
                        height: normalize(300),
                        width: normalize(300),
                        marginTop: normalize(20),
                        borderRadius: normalize(150),
                        borderWidth: 1,
                        borderColor: "#666666",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#246175"
                    },
                    ContactItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(20),
                        alignSelf: "stretch",
                        justifyContent: "center",
                    },
                    DescriptionContainer: {
                        padding: 20,
                        backgroundColor: "#333",
                        marginTop: normalize(20),
                    },
                    itens: {
                        fontSize: normalize(18),
                        color: "#cccccc"
                    },
                })
            ); 
        }
    } else {
        return (
            StyleSheet.create({
                logo: {
                    height: "50%",
                    width: "100%"
                },
                container: {
                    flex: 1,
                    backgroundColor: "#e699cc"
                },
                imgContact: {
                    height: normalize(300),
                    width: normalize(300),
                    marginTop: normalize(20),
                    borderRadius: normalize(150),
                    borderWidth: 1,
                    borderColor: "#7a1f5c",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                },
                ContactItens: {
                    paddingVertical: normalize(10),
                    paddingHorizontal: normalize(20),
                    alignSelf: "stretch",
                    justifyContent: "center",
                },
                DescriptionContainer: {
                    padding: normalize(20),
                    backgroundColor: "#f2f2f2",
                    marginTop: normalize(20),
                },
                itens: {
                    fontSize: normalize(18),
                    color: "#333333"
                },
            })
        );
    }
}