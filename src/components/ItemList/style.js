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
                        alignSelf: "stretch",
                        backgroundColor: "#e6e6e6",
                    },
                    ItemItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(10),
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        flexDirection: "row",
                    },
                    label: {
                        position: "absolute",
                        bottom: 0,
                        fontSize: normalize(12),
                        fontWeight: "bold",
                        paddingHorizontal: normalize(5),
                        textAlign: "center",
                        width: "100%",
                        paddingVertical: normalize(3),
                        borderWidth: 1,
                        borderColor: "#333",
                        borderRadius: normalize(4),
                        backgroundColor: "#f2f2f2"
                    },
                    btn_item: {
                        alignItems: "center",
                        justifyContent: "center",
                        margin: normalize(10),
                        height: normalize(110),
                        width: normalize(82)
                    },
                    item: {
                        alignItems: "center",
                        justifyContent: "center"
                    }, 
                    img: {
                        height: normalize(82),
                        width: normalize(82)
                    },
                    closeModal: {
                        marginBottom: normalize(10),
                        padding: normalize(2),
                        backgroundColor: "#b30000",
                        borderWidth: 1,
                        borderColor: "#8b0000",
                        borderRadius: normalize(5),
                        paddingHorizontal: normalize(20),
                        marginVertical: normalize(10),
                    },
                    txtCloseModal: {
                        fontSize: normalize(28),
                        color: "#fff"
                    },
                    modalContainer: {
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,.2)",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        alignSelf: "stretch"
                    },
                    MyitemModal: {
                        height: "60%",
                        backgroundColor: "#e6e6e6",
                        alignSelf: "stretch",
                        textAlign: "center"
                    },
                    titleModal: {
                        fontSize: normalize(28),
                        textAlign: "center",
                        color: "#333333"
                    },
                    desModal: {
                        fontSize: normalize(18),
                        textAlign: "center",
                        paddingHorizontal: normalize(10),
                        color: "#333333",
                        paddingBottom: normalize(10)
                    },
                    imgWrapper: {
                        backgroundColor: "#d9d9d9",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "stretch",
                        paddingVertical: normalize(20)
                    }
                })
            );
        } else {
            return (
                StyleSheet.create({
                    container: {
                        flex: 1,
                        alignSelf: "stretch",
                        backgroundColor: "#262626",
                    },
                    ItemItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(10),
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        flexDirection: "row",
                    },
                    label: {
                        position: "absolute",
                        bottom: 0,
                        fontSize: normalize(12),
                        fontWeight: "bold",
                        paddingHorizontal: normalize(5),
                        textAlign: "center",
                        width: "100%",
                        paddingVertical: normalize(3),
                        borderWidth: 1,
                        borderColor: "#333",
                        borderRadius: normalize(4),
                        backgroundColor: "#f2f2f2"
                    },
                    btn_item: {
                        alignItems: "center",
                        justifyContent: "center",
                        margin: normalize(10),
                        height: normalize(110),
                        width: normalize(82)
                    },
                    item: {
                        alignItems: "center",
                        justifyContent: "center"
                    }, 
                    img: {
                        height: normalize(82),
                        width: normalize(82)
                    },
                    closeModal: {
                        marginBottom: normalize(10),
                        padding: normalize(2),
                        backgroundColor: "#b30000",
                        borderWidth: 1,
                        borderColor: "#8b0000",
                        borderRadius: normalize(5),
                        paddingHorizontal: normalize(20),
                        marginVertical: normalize(10),
                    },
                    txtCloseModal: {
                        fontSize: normalize(28),
                        color: "#fff"
                    },
                    modalContainer: {
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,.2)",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        alignSelf: "stretch"
                    },
                    MyitemModal: {
                        height: "60%",
                        backgroundColor: "#262626",
                        alignSelf: "stretch",
                        textAlign: "center"
                    },
                    titleModal: {
                        fontSize: normalize(28),
                        textAlign: "center",
                        color: "#cccccc"
                    },
                    desModal: {
                        fontSize: normalize(18),
                        textAlign: "center",
                        paddingHorizontal: normalize(10),
                        color: "#cccccc",
                        paddingBottom: normalize(10)
                    },
                    imgWrapper: {
                        backgroundColor: "#333",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "stretch",
                        paddingVertical: normalize(20)
                    }
                })
            ); 
        }
    } else {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                    alignSelf: "stretch",
                    backgroundColor: "#e699cc",
                },
                ItemItens: {
                    paddingVertical: normalize(10),
                    paddingHorizontal: normalize(10),
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    flexDirection: "row",
                },
                label: {
                    position: "absolute",
                    bottom: 0,
                    fontSize: normalize(12),
                    fontWeight: "bold",
                    paddingHorizontal: normalize(5),
                    textAlign: "center",
                    width: "100%",
                    paddingVertical: normalize(3),
                    borderWidth: 1,
                    borderColor: "#333",
                    borderRadius: normalize(4),
                    backgroundColor: "#f2f2f2"
                },
                btn_item: {
                    alignItems: "center",
                    justifyContent: "center",
                    margin: normalize(10),
                    height: normalize(110),
                    width: normalize(82)
                },
                item: {
                    alignItems: "center",
                    justifyContent: "center"
                }, 
                img: {
                    height: normalize(82),
                    width: normalize(82)
                },
                closeModal: {
                    marginBottom: normalize(10),
                    padding: normalize(2),
                    backgroundColor: "#b30000",
                    borderWidth: 1,
                    borderColor: "#8b0000",
                    borderRadius: normalize(5),
                    paddingHorizontal: normalize(20),
                    marginVertical: normalize(10),
                },
                txtCloseModal: {
                    fontSize: normalize(28),
                    color: "#fff"
                },
                modalContainer: {
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,.2)",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    alignSelf: "stretch"
                },
                MyitemModal: {
                    height: "60%",
                    backgroundColor: "#e699cc",
                    alignSelf: "stretch",
                    textAlign: "center"
                },
                titleModal: {
                    fontSize: normalize(28),
                    textAlign: "center"
                },
                desModal: {
                    fontSize: normalize(18),
                    textAlign: "center",
                    paddingHorizontal: normalize(10),
                    color: "#333333",
                    paddingBottom: normalize(10)
                },
                imgWrapper: {
                    backgroundColor: "#f5d6eb",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "stretch",
                    paddingVertical: normalize(20)
                }
            })
        );
    }
}