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
                    header: {
                        alignSelf: "stretch",
                        paddingTop: normalize(20),
                        backgroundColor: "#d9d9d9",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    username: {
                        fontSize: normalize(18),
                        color: "#333333",
                    },
                    imgWrapper: {
                        height: normalize(150),
                        width: normalize(150),
                        borderRadius: normalize(80),
                        borderWidth: 1,
                        backgroundColor: "lightblue",
                        borderColor: "#246175",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    img: {
                        height: "50%",
                        width: "100%"
                    },
                    profileInfo: {
                        marginVertical: normalize(10),
                        marginHorizontal: normalize(30),
                        paddingHorizontal: normalize(20),
                        paddingVertical: normalize(5),
                        backgroundColor: "#e6e6e6",
                        borderWidth: 1,
                        borderColor: "#bfbfbf",
                        borderRadius: normalize(7),
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    OptUser: {
                        position: "absolute",
                        height: normalize(100)
                    },
                    MenuItens: {
                        color: "#333333"
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
                    header: {
                        alignSelf: "stretch",
                        paddingTop: normalize(20),
                        backgroundColor: "#333333",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    username: {
                        fontSize: normalize(18),
                        color: "#d9d9d9",
                    },
                    imgWrapper: {
                        height: normalize(150),
                        width: normalize(150),
                        borderRadius: normalize(80),
                        borderWidth: 1,
                        backgroundColor: "#246175",
                        borderColor: "lightblue",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    img: {
                        height: "50%",
                        width: "100%"
                    },
                    profileInfo: {
                        marginVertical: normalize(10),
                        marginHorizontal: normalize(30),
                        paddingHorizontal: normalize(20),
                        paddingVertical: normalize(5),
                        backgroundColor: "#262626",
                        borderWidth: 1,
                        borderColor: "#666666",
                        borderRadius: normalize(7),
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    OptUser: {

                    },
                    MenuItens: {
                        color: "#cccccc"
                    },
                })
            ); 
        }
    } else {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: "#e699cc"
                },
                header: {
                    alignSelf: "stretch",
                    paddingTop: normalize(20),
                    backgroundColor: "#e699cc",
                    alignItems: "center",
                    justifyContent: "center"
                },
                username: {
                    fontSize: normalize(18),
                    color: "#333333",
                },
                imgWrapper: {
                    height: normalize(150),
                    width: normalize(150),
                    borderRadius: normalize(80),
                    borderWidth: 1,
                    backgroundColor: "#f5d6eb",
                    borderColor: "#7a1f5c",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                },
                img: {
                    height: "50%",
                    width: "100%"
                },
                profileInfo: {
                    marginVertical: normalize(10),
                    marginHorizontal: normalize(30),
                    paddingHorizontal: normalize(20),
                    paddingVertical: normalize(5),
                    backgroundColor: "#e699cc",
                    borderWidth: 1,
                    borderColor: "#7a1f5c",
                    borderRadius: normalize(7),
                    alignItems: "center",
                    justifyContent: "center"
                },
                OptUser: {
                    position: "absolute",
                    height: normalize(100)
                },
                MenuItens: {
                    color: "#333333"
                },
            })
        );
    }
}