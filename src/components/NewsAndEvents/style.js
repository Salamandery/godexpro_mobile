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
                    NewItem: {
                        paddingVertical: normalize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "stretch",
                        borderBottomWidth: 1,
                        borderBottomColor: "#bfbfbf"
                    },
                    new_date: {
                        color: "#333333",
                        fontSize: normalize(20),
                        paddingHorizontal: normalize(10),
                        marginHorizontal: normalize(5),
                        fontWeight: "bold"
                    },
                    new_label: {
                        color: "#333333",
                        fontSize: normalize(26),
                        flexWrap: "wrap",
                        flex: 1
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
                        marginHorizontal: normalize(5),
                        textAlign: "center",
                        color: "#333333"
                    },
                    titleDate: {
                        fontSize: normalize(16),
                        marginHorizontal: normalize(10),
                        textAlign: "center",
                        color: "#333333"
                    },
                    desModal: {
                        fontSize: normalize(18),
                        textAlign: "center",
                        paddingHorizontal: normalize(10),
                        color: "#333333"
                    },
                    desHint: {
                        fontSize: normalize(18),
                        textAlign: "center",
                        paddingHorizontal: normalize(10),
                        paddingVertical: normalize(20),
                        color: "#333333",
                        fontStyle: "italic"
                    },
                    Posted: {
                        textAlign: "center",
                        color: "#333333",
                        fontSize: normalize(14),
                    },
                    itemContainer: {
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        paddingVertical: normalize(10),
                    },
                    Item_list: {
                        textAlign: "center",
                        color: "#333333",
                        fontWeight: "bold"
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
                        backgroundColor: "#262626"
                    },
                    NewsItens: {
                        flex: 1,
                        alignSelf: "stretch",
                    },
                    new_list: {
                        alignSelf: "stretch"
                    },
                    NewItem: {
                        paddingVertical: normalize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "stretch",
                        borderBottomWidth: 1,
                        borderBottomColor: "#666666"
                    },
                    new_date: {
                        color: "#cccccc",
                        fontSize: normalize(20),
                        paddingHorizontal: normalize(10),
                        marginHorizontal: normalize(5),
                        fontWeight: "bold"
                    },
                    new_label: {
                        color: "#cccccc",
                        fontSize: normalize(26),
                        flexWrap: "wrap",
                        flex: 1
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
                        marginHorizontal: normalize(5),
                        textAlign: "center",
                        color: "#cccccc",
                        fontWeight: "bold"
                    },
                    titleDate: {
                        fontSize: normalize(16),
                        marginHorizontal: normalize(10),
                        textAlign: "center",
                        color: "#cccccc"
                    },
                    desModal: {
                        fontSize: normalize(18),
                        textAlign: "center",
                        paddingHorizontal: normalize(10),
                        color: "#cccccc"
                    },
                    desHint: {
                        fontSize: normalize(18),
                        textAlign: "center",
                        paddingHorizontal: normalize(10),
                        paddingVertical: normalize(20),
                        color: "#cccccc",
                        fontStyle: "italic"
                    },
                    Posted: {
                        textAlign: "center",
                        color: "#cccccc",
                        fontSize: normalize(14),
                    },
                    itemContainer: {
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        paddingVertical: normalize(10),
                    },
                    Item_list: {
                        textAlign: "center",
                        color: "#cccccc",
                        fontWeight: "bold"
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
                    backgroundColor: "#e699cc"
                },
                NewItem: {
                    paddingVertical: normalize(10),
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottomWidth: 1,
                    borderBottomColor: "#7a1f5c"
                },
                new_date: {
                    color: "#333333",
                    fontSize: normalize(20),
                    paddingHorizontal: normalize(10),
                    marginHorizontal: normalize(5),
                    fontWeight: "bold"
                },
                new_label: {
                    color: "#333333",
                    fontSize: normalize(26),
                    flexWrap: "wrap",
                    flex: 1
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
                    marginHorizontal: normalize(5),
                    textAlign: "center",
                    color: "#333333"
                },
                titleDate: {
                    fontSize: normalize(16),
                    marginHorizontal: normalize(10),
                    textAlign: "center",
                    color: "#333333"
                },
                desModal: {
                    fontSize: normalize(18),
                    textAlign: "center",
                    paddingHorizontal: normalize(10),
                    color: "#333333"
                },
                desHint: {
                    fontSize: normalize(18),
                    textAlign: "center",
                    paddingHorizontal: normalize(10),
                    paddingVertical: normalize(20),
                    color: "#333333",
                    fontStyle: "italic"
                },
                Posted: {
                    textAlign: "center",
                    color: "#333333",
                    fontSize: normalize(14),
                },
                itemContainer: {
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    paddingVertical: normalize(10),
                },
                Item_list: {
                    textAlign: "center",
                    color: "#333333",
                    fontWeight: "bold"
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