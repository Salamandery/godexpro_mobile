import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === "false") {
            return (StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#e6e6e6"
                    },
                    list: {
                        padding: normalize(5)
                    },  
                    pkm_list: {
                        flex: 1,
                        alignSelf: "stretch"
                    },
                    PkmItem: {
                        paddingVertical: normalize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "stretch",
                        borderBottomWidth: 1,
                        borderBottomColor: "#bfbfbf"
                    },
                    pkm_imgWrap: {
                        width: normalize(99),
                        height: normalize(99),
                        borderRadius: normalize(40),
                        backgroundColor: "lightblue",
                        marginHorizontal: normalize(10),
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    pkm_img: {
                        width: normalize(80),
                        height: normalize(80),
                        alignSelf: "center"
                    },
                    pkm_num: {
                        paddingHorizontal: normalize(20),
                        marginHorizontal: normalize(10),
                        borderRightWidth: 1,
                        borderRightColor: "#bfbfbf",
                        borderLeftWidth: 1,
                        borderLeftColor: "#bfbfbf",
                        color: "#333333",
                        fontSize: normalize(20)
                    },
                    pkm_name: {
                        color: "#333333",
                        fontSize: normalize(20)
                    },
                    modalContainer: {
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,.2)"
                    },
                    pkmModalInfo: {
                        height: "50%",
                        borderTopWidth: 1,
                        borderTopColor: "#246175",
                        alignSelf: "stretch",
                        backgroundColor: "#e6e6e6",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    },
                    ModalClose: {
                        marginBottom: normalize(10),
                        padding: normalize(2),
                        backgroundColor: "#b30000",
                        borderWidth: 1,
                        borderColor: "#8b0000",
                        borderRadius: normalize(5),
                        paddingHorizontal: normalize(20),
                        marginVertical: normalize(10),
                    },
                    txtModalClose: {
                        marginHorizontal: normalize(5),
                        color: "#cccccc",
                        fontSize: normalize(28)
                    },
                    ModalImgWrapper: {
                        padding: normalize(5),
                        alignSelf: "stretch",
                        backgroundColor: "lightblue",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomWidth: 1,
                        borderBottomColor: "#246175",
                    },
                    ModalItemImg: {
                        height: normalize(100),
                        width: normalize(100)
                    },
                    ModalTitle: {
                        fontSize: normalize(30),
                        color: "#333333"
                    },
                    status: {
                        alignSelf: "stretch",
                        marginHorizontal: normalize(30),
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderTopWidth: 1,
                        borderTopColor: "#bfbfbf"
                    },
                    lblStatWrapper: {
                        alignSelf: "stretch"
                    },  
                    progress: {
                        transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
                        marginTop: normalize(3),
                        alignSelf: "stretch"
                    },
                    grpStat: {
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch"
                    },
                    atk: {
                        textAlign: "center",
                        fontSize: normalize(16),
                        color: "#333333",
                    },
                    def: {
                        textAlign: "center",
                        fontSize: normalize(16),
                        color: "#333333",
                    },
                    stm: {
                        textAlign: "center",
                        fontSize: normalize(16),
                        color: "#333333",
                    },
                    ModalNextInfo: {
                        marginTop: normalize(2),
                        backgroundColor: "lightblue",
                        paddingVertical: normalize(5),
                        paddingHorizontal: normalize(10),
                        borderWidth: 1,
                        borderRadius: normalize(10),
                        borderColor: "#246175",
                    },
                    lblModalNext: {
                        fontSize: normalize(16),
                        color: "#333333",
                    },
                    searchBox: {
                        alignSelf: "stretch",
                        borderWidth: 1,
                        borderColor: "#bfbfbf",
                        elevation: 1,
                        shadowColor: '#000',
                        shadowOpacity: .02,
                        shadowRadius: 2,
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                    },
                    searchInput: {
                        fontSize: normalize(20),
                        color: "#333333",
                        paddingHorizontal: normalize(10),
                    },
                    modalAri: {
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,.2)"
                    },
                    ariContainer: {
                        alignSelf: "stretch",
                        borderTopWidth: 1,
                        borderTopColor: "lightblue",
                        alignSelf: "stretch",
                        backgroundColor: "#ffffff",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    },
                    ariTitle: {
                        fontSize: normalize(26),
                        padding: normalize(5)
                    },
                    ModalAriClose: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    txtModalGo: {
                        paddingHorizontal: normalize(5),
                        borderRadius: normalize(4),
                        marginHorizontal: normalize(5),
                        marginBottom: normalize(10),
                        backgroundColor: "#262626",
                        color: "#cccccc",
                        fontSize: normalize(22)
                    },
                    floatingWrapper: {
                        position: "absolute",
                        bottom: normalize(20),
                        right: normalize(20),
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    floatButton: {
                        width: normalize(60),
                        height: normalize(60),
                        alignItems: "center",
                        justifyContent: "center",
                        elevation: 2,
                        shadowColor: '#000',
                        shadowOpacity: 2,
                        shadowRadius: 5,
                        borderRadius: normalize(30),
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                    }, 
                    otherButton: {
                        width: normalize(45),
                        height: normalize(45),
                        alignItems: "center",
                        justifyContent: "center",
                        elevation: 2,
                        shadowColor: '#000',
                        shadowOpacity: 2,
                        shadowRadius: 5,
                        borderRadius: normalize(30),
                        backgroundColor: "#f2f2f2",
                        position: "absolute",
                        bottom: normalize(5),
                        right: normalize(8)
                    },
                    searchTitle: {
                        color: "#fff",
                    },
                    searchButton: {
                        backgroundColor: "#222"
                    },
                    lblTxtName: {
                        color: "#000",
                        fontWeight: "bold",
                    },
                    bgFloating: {
                        backgroundColor: "rgba(0,0,0, .2)",
                        position: "absolute",
                        bottom: normalize(2),
                        right: normalize(2),
                        width: normalize(60),
                        height: normalize(60),
                        borderRadius: normalize(30),
                    }
                })
            );
        } else {
            return (StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#262626"
                    },
                    list: {
                        padding: normalize(5)
                    },  
                    pkm_list: {
                        flex: 1,
                        alignSelf: "stretch"
                    },
                    PkmItem: {
                        paddingVertical: normalize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "stretch",
                        borderBottomWidth: 1,
                        borderBottomColor: "#666666"
                    },
                    pkm_imgWrap: {
                        width: normalize(99),
                        height: normalize(99),
                        borderRadius: normalize(40),
                        backgroundColor: "#246175",
                        marginHorizontal: normalize(10),
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    pkm_img: {
                        width: normalize(80),
                        height: normalize(80),
                        alignSelf: "center"
                    },
                    pkm_num: {
                        paddingHorizontal: normalize(20),
                        marginHorizontal: normalize(10),
                        borderRightWidth: 1,
                        borderRightColor: "#666666",
                        borderLeftWidth: 1,
                        borderLeftColor: "#666666",
                        color: "#cccccc",
                        fontSize: normalize(20)
                    },
                    pkm_name: {
                        color: "#cccccc",
                        fontSize: normalize(20)
                    },
                    modalContainer: {
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,.2)"
                    },
                    pkmModalInfo: {
                        height: "50%",
                        borderTopWidth: 1,
                        borderTopColor: "lightblue",
                        alignSelf: "stretch",
                        backgroundColor: "#262626",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    },
                    ModalClose: {
                        marginBottom: normalize(10),
                        padding: normalize(2),
                        backgroundColor: "#b30000",
                        borderWidth: 1,
                        borderColor: "#8b0000",
                        borderRadius: normalize(5),
                        paddingHorizontal: normalize(20),
                        marginVertical: normalize(10),
                    },
                    txtModalClose: {
                        marginHorizontal: normalize(5),
                        color: "#cccccc",
                        fontSize: normalize(28)
                    },
                    ModalImgWrapper: {
                        padding: normalize(5),
                        alignSelf: "stretch",
                        backgroundColor: "#246175",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomWidth: 1,
                        borderBottomColor: "lightblue",
                    },
                    ModalItemImg: {
                        height: normalize(100),
                        width: normalize(100)
                    },
                    ModalTitle: {
                        fontSize: normalize(30),
                        color: "#cccccc"
                    },
                    status: {
                        alignSelf: "stretch",
                        marginHorizontal: normalize(30),
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderTopWidth: 1,
                        borderTopColor: "#666666"
                    },
                    lblStatWrapper: {
                        alignSelf: "stretch"
                    },  
                    progress: {
                        transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
                        marginTop: normalize(3),
                        alignSelf: "stretch"
                    },
                    grpStat: {
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch"
                    },
                    atk: {
                        textAlign: "center",
                        fontSize: normalize(16),
                        color: "#cccccc",
                    },
                    def: {
                        textAlign: "center",
                        fontSize: normalize(16),
                        color: "#cccccc",
                    },
                    stm: {
                        textAlign: "center",
                        fontSize: normalize(16),
                        color: "#cccccc",
                    },
                    ModalNextInfo: {
                        marginTop: normalize(2),
                        backgroundColor: "#246175",
                        paddingVertical: normalize(5),
                        paddingHorizontal: normalize(10),
                        borderWidth: 1,
                        borderRadius: normalize(10),
                        borderColor: "lightblue",
                    },
                    lblModalNext: {
                        fontSize: normalize(16),
                        color: "#cccccc",
                    },
                    searchBox: {
                        alignSelf: "stretch",
                        borderWidth: 1,
                        borderColor: "#666666",
                        elevation: 1,
                        shadowColor: '#000',
                        shadowOpacity: .02,
                        shadowRadius: 2,
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                    },
                    searchInput: {
                        fontSize: normalize(20),
                        color: "#cccccc",
                        paddingHorizontal: normalize(10),
                    },
                    modalAri: {
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,.2)"
                    },
                    ariContainer: {
                        alignSelf: "stretch",
                        borderTopWidth: 1,
                        borderTopColor: "lightblue",
                        alignSelf: "stretch",
                        backgroundColor: "#ffffff",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    },
                    ariTitle: {
                        fontSize: normalize(26),
                        padding: normalize(5)
                    },
                    ModalAriClose: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    txtModalGo: {
                        paddingHorizontal: normalize(5),
                        borderRadius: normalize(4),
                        marginHorizontal: normalize(5),
                        marginBottom: normalize(10),
                        backgroundColor: "#262626",
                        color: "#cccccc",
                        fontSize: normalize(22)
                    },
                    floatingWrapper: {
                        position: "absolute",
                        bottom: normalize(20),
                        right: normalize(20),
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    floatButton: {
                        width: normalize(60),
                        height: normalize(60),
                        alignItems: "center",
                        justifyContent: "center",
                        elevation: 2,
                        shadowColor: '#fff',
                        shadowOpacity: 2,
                        shadowRadius: 5,
                        borderRadius: normalize(30),
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                    }, 
                    otherButton: {
                        width: normalize(45),
                        height: normalize(45),
                        alignItems: "center",
                        justifyContent: "center",
                        elevation: 2,
                        shadowColor: '#fff',
                        shadowOpacity: 2,
                        shadowRadius: 5,
                        borderRadius: normalize(30),
                        backgroundColor: "#888",
                        position: "absolute",
                        bottom: normalize(5),
                        right: normalize(8)
                    },
                    searchTitle: {
                        color: "#fff",
                    },
                    searchButton: {
                        backgroundColor: "#444"
                    },
                    lblTxtName: {
                        color: "#fff",
                        fontWeight: "bold",
                    },
                    bgFloating: {
                        backgroundColor: "rgba(0,0,0, .2)",
                        position: "absolute",
                        bottom: normalize(2),
                        right: normalize(2),
                        width: normalize(60),
                        height: normalize(60),
                        borderRadius: normalize(30),
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
                list: {
                    padding: normalize(5)
                },  
                pkm_list: {
                    flex: 1,
                    alignSelf: "stretch"
                },
                PkmItem: {
                    paddingVertical: normalize(10),
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottomWidth: 1,
                    borderBottomColor: "#7a1f5c"
                },
                pkm_imgWrap: {
                    width: normalize(99),
                    height: normalize(99),
                    borderRadius: normalize(40),
                    backgroundColor: "#f5d6eb",
                    marginHorizontal: normalize(10),
                    justifyContent: "center",
                    alignItems: "center"
                },
                pkm_img: {
                    width: normalize(80),
                    height: normalize(80),
                    alignSelf: "center"
                },
                pkm_num: {
                    paddingHorizontal: normalize(20),
                    marginHorizontal: normalize(10),
                    borderRightWidth: 1,
                    borderRightColor: "#7a1f5c",
                    borderLeftWidth: 1,
                    borderLeftColor: "#7a1f5c",
                    color: "#333333",
                    fontSize: normalize(20)
                },
                pkm_name: {
                    color: "#333333",
                    fontSize: normalize(20)
                },
                modalContainer: {
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,.2)"
                },
                pkmModalInfo: {
                    height: "50%",
                    borderTopWidth: 1,
                    borderTopColor: "#f5d6eb",
                    alignSelf: "stretch",
                    backgroundColor: "#e699cc",
                    justifyContent: "flex-start",
                    alignItems: "center"
                },
                ModalClose: {
                    marginBottom: normalize(10),
                    padding: normalize(2),
                    backgroundColor: "#b30000",
                    borderWidth: 1,
                    borderColor: "#8b0000",
                    borderRadius: normalize(5),
                    paddingHorizontal: normalize(20),
                    marginVertical: normalize(10),
                },
                txtModalClose: {
                    marginHorizontal: normalize(5),
                    color: "#cccccc",
                    fontSize: normalize(28)
                },
                ModalImgWrapper: {
                    padding: normalize(5),
                    alignSelf: "stretch",
                    backgroundColor: "#f5d6eb",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: "#f5d6eb",
                },
                ModalItemImg: {
                    height: normalize(100),
                    width: normalize(100)
                },
                ModalTitle: {
                    fontSize: normalize(30),
                    color: "#333333"
                },
                status: {
                    alignSelf: "stretch",
                    marginHorizontal: normalize(30),
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c"
                },
                lblStatWrapper: {
                    alignSelf: "stretch"
                },  
                progress: {
                    transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
                    marginTop: normalize(3),
                    alignSelf: "stretch"
                },
                grpStat: {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch"
                },
                atk: {
                    textAlign: "center",
                    fontSize: normalize(16),
                    color: "#333333",
                },
                def: {
                    textAlign: "center",
                    fontSize: normalize(16),
                    color: "#333333",
                },
                stm: {
                    textAlign: "center",
                    fontSize: normalize(16),
                    color: "#333333",
                },
                ModalNextInfo: {
                    marginTop: normalize(2),
                    backgroundColor: "#f5d6eb",
                    paddingVertical: normalize(5),
                    paddingHorizontal: normalize(10),
                    borderWidth: 1,
                    borderRadius: normalize(10),
                    borderColor: "#7a1f5c",
                },
                lblModalNext: {
                    fontSize: normalize(16),
                    color: "#333333",
                },
                searchBox: {
                    alignSelf: "stretch",
                    borderWidth: 1,
                    borderColor: "#f5d6eb",
                    elevation: 1,
                    shadowColor: '#000',
                    shadowOpacity: .02,
                    shadowRadius: 2,
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                },
                searchInput: {
                    fontSize: normalize(20),
                    color: "#333333",
                    paddingHorizontal: normalize(10),
                },
                modalAri: {
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,.2)"
                },
                ariContainer: {
                    alignSelf: "stretch",
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c",
                    alignSelf: "stretch",
                    backgroundColor: "#ffffff",
                    justifyContent: "flex-start",
                    alignItems: "center"
                },
                ariTitle: {
                    fontSize: normalize(26),
                    padding: normalize(5)
                },
                ModalAriClose: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                },
                txtModalGo: {
                    paddingHorizontal: normalize(5),
                    borderRadius: normalize(4),
                    marginHorizontal: normalize(5),
                    marginBottom: normalize(10),
                    backgroundColor: "#262626",
                    color: "#cccccc",
                    fontSize: normalize(22)
                },
                floatingWrapper: {
                    position: "absolute",
                    bottom: normalize(20),
                    right: normalize(20),
                    justifyContent: "center",
                    alignItems: "center"
                },
                floatButton: {
                    width: normalize(60),
                    height: normalize(60),
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 2,
                    shadowColor: '#000',
                    shadowOpacity: 2,
                    shadowRadius: 5,
                    borderRadius: normalize(30),
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                }, 
                otherButton: {
                    width: normalize(45),
                    height: normalize(45),
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 2,
                    shadowColor: '#000',
                    shadowOpacity: 2,
                    shadowRadius: 5,
                    borderRadius: normalize(30),
                    backgroundColor: "#f0d0eb",
                    position: "absolute",
                    bottom: normalize(5),
                    right: normalize(8)
                },
                searchTitle: {
                    color: "#fff",
                },
                searchButton: {
                    backgroundColor: "#7a1f5c"
                },
                lblTxtName: {
                    color: "#000",
                    fontWeight: "bold",
                },
                bgFloating: {
                    backgroundColor: "rgba(0,0,0, .2)",
                    position: "absolute",
                    bottom: normalize(2),
                    right: normalize(2),
                    width: normalize(60),
                    height: normalize(60),
                    borderRadius: normalize(30),
                }
            })
        );
    }
}