import {
    StyleSheet
} from 'react-native';
import { normalize } from '../../components/StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === "true") {
            return (
                StyleSheet.create({
                    container: {
                        flex: 1,
                        flexDirection: "column",
                        backgroundColor: "#262626"
                    },
                    lblBack: {
                        fontSize: normalize(34),
                        color: "#cccccc",
                    },
                    back: {
                        position: "absolute",
                        top: 0,
                        marginTop: normalize(15),
                        marginHorizontal: normalize(10)
                    },
                    infoPkm: {
                        alignSelf: "stretch",
                        flexDirection: "row",
                        paddingHorizontal: normalize(20),
                        paddingVertical: normalize(10),
                        marginVertical: normalize(10),
                        marginHorizontal: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#666666",
                    },
                    InfoItens: {
                        flex: 1,
                        borderTopColor: "#666666",
                        borderTopWidth: 1
                    },
                    imgWrap: {
                        backgroundColor: "#246175",
                        alignSelf: "stretch",
                        height: normalize(310),
                        borderBottomLeftRadius: normalize(40),
                        borderBottomRightRadius: normalize(40),
                        marginBottom: normalize(10),
                    }, 
                    pkm_img: {
                        height: normalize(290),
                        width: normalize(290),
                        borderRadius: normalize(70),
                        alignSelf: "center"
                    },
                    cp: {
                        marginTop: normalize(10),
                        fontSize: normalize(26),
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderLeftColor: "#666666",
                        borderRightColor: "#666666",
                        paddingHorizontal: normalize(20),
                        color: "#cccccc",
                    },
                    type: {
                        marginTop: normalize(10),
                        marginHorizontal: normalize(10),
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    gender: {
                        marginTop: normalize(10),
                        marginHorizontal: normalize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        alignContent: "stretch",
                        width: "25%"
                    },
                    lblGender: {
                        fontSize: normalize(12),
                        color: "#cccccc",
                    },
                    img_sex: {
                        marginHorizontal: normalize(5),
                        height: normalize(20),
                        width: normalize(20)
                    },
                    description: {
                        fontSize: normalize(26),
                        marginVertical: normalize(10),
                        marginHorizontal: normalize(20),
                        paddingVertical: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#666666",
                        color: "#cccccc",
                    },  
                    status: {
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: normalize(20),
                        paddingVertical: normalize(15),
                        paddingRight: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#666666"
                    },
                    lblStatWrapper: {
                        width: "35%",
                    },  
                    progress: {
                        transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                        marginTop: normalize(3),
                        width: "65%",
                        height: normalize(20)
                    },
                    grpStat: {
                        flexDirection: "row",
                        alignSelf: "stretch"
                    },
                    atk: {
                        fontSize: normalize(20),
                        marginHorizontal: normalize(20),
                        color: "#cccccc",
                    },
                    def: {
                        fontSize: normalize(20),
                        marginHorizontal: normalize(20),
                        color: "#cccccc",
                    },
                    stm: {
                        fontSize: normalize(20),
                        marginHorizontal: normalize(20),
                        color: "#cccccc",
                    },
                })
            );
        } else {
            return (
                StyleSheet.create({
                    lblBack: {
                        fontSize: normalize(34),
                        color: "#333333"
                    },
                    back: {
                        position: "absolute",
                        top: 0,
                        marginTop: normalize(15),
                        marginHorizontal: normalize(10)
                    },
                    container: {
                        flex: 1,
                        flexDirection: "column",
                        backgroundColor: "#e6e6e6"
                    },
                    infoPkm: {
                        alignSelf: "stretch",
                        flexDirection: "row",
                        paddingHorizontal: normalize(20),
                        paddingVertical: normalize(10),
                        marginVertical: normalize(10),
                        marginHorizontal: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#bfbfbf",
                    },
                    InfoItens: {
                        flex: 1,
                    },
                    imgWrap: {
                        backgroundColor: "lightblue",
                        alignSelf: "stretch",
                        height: normalize(310),
                        borderBottomLeftRadius: normalize(40),
                        borderBottomRightRadius: normalize(40),
                        marginBottom: normalize(10),
                    }, 
                    pkm_img: {
                        height: normalize(290),
                        width: normalize(290),
                        borderRadius: normalize(70),
                        alignSelf: "center"
                    },
                    cp: {
                        marginTop: normalize(10),
                        fontSize: normalize(26),
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderLeftColor: "#bfbfbf",
                        borderRightColor: "#bfbfbf",
                        paddingHorizontal: normalize(20),
                        color: "#333333"
                    },
                    type: {
                        marginTop: normalize(10),
                        marginHorizontal: normalize(10),
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    gender: {
                        marginTop: normalize(10),
                        marginHorizontal: normalize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        alignContent: "stretch",
                        width: "25%"
                    },
                    lblGender: {
                        fontSize: normalize(12),
                        color: "#333333"
                    },
                    img_sex: {
                        marginHorizontal: normalize(5),
                        height: normalize(20),
                        width: normalize(20)
                    },
                    description: {
                        fontSize: normalize(26),
                        marginVertical: normalize(10),
                        marginHorizontal: normalize(20),
                        paddingVertical: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#bfbfbf",
                        color: "#333333"
                    },  
                    status: {
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: normalize(20),
                        paddingVertical: normalize(15),
                        paddingRight: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#bfbfbf"
                    },
                    lblStatWrapper: {
                        width: "35%"
                    },  
                    progress: {
                        transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                        marginTop: normalize(3),
                        width: "65%",
                        height: normalize(20)
                    },
                    grpStat: {
                        flexDirection: "row",
                        alignSelf: "stretch"
                    },
                    atk: {
                        fontSize: normalize(20),
                        marginHorizontal: normalize(20),
                        color: "#333333"
                    },
                    def: {
                        fontSize: normalize(20),
                        marginHorizontal: normalize(20),
                        color: "#333333"
                    },
                    stm: {
                        fontSize: normalize(20),
                        marginHorizontal: normalize(20),
                        color: "#333333"
                    },
                })
            ); 
        } 
    } else {
        return (
            StyleSheet.create({
                lblBack: {
                    fontSize: normalize(34),
                    color: "#333333"
                },
                back: {
                    position: "absolute",
                    top: 0,
                    marginTop: normalize(15),
                    marginHorizontal: normalize(10)
                },
                container: {
                    flex: 1,
                    flexDirection: "column",
                    backgroundColor: "#e699cc"
                },
                infoPkm: {
                    alignSelf: "stretch",
                    flexDirection: "row",
                    paddingHorizontal: normalize(20),
                    paddingVertical: normalize(10),
                    marginVertical: normalize(10),
                    marginHorizontal: normalize(20),
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c",
                },
                InfoItens: {
                    flex: 1,
                },
                imgWrap: {
                    backgroundColor: "#f5d6eb",
                    alignSelf: "stretch",
                    height: normalize(310),
                    borderBottomLeftRadius: normalize(40),
                    borderBottomRightRadius: normalize(40),
                    marginBottom: normalize(10),
                }, 
                pkm_img: {
                    height: normalize(290),
                    width: normalize(290),
                    borderRadius: normalize(70),
                    alignSelf: "center"
                },
                cp: {
                    marginTop: normalize(10),
                    fontSize: normalize(26),
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderLeftColor: "#7a1f5c",
                    borderRightColor: "#7a1f5c",
                    paddingHorizontal: normalize(20),
                    color: "#333333"
                },
                type: {
                    marginTop: normalize(10),
                    marginHorizontal: normalize(10),
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                },
                gender: {
                    marginTop: normalize(20),
                    marginHorizontal: normalize(10),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    alignContent: "stretch",
                    width: "25%"
                },
                lblGender: {
                    fontSize: normalize(12),
                    color: "#333333"
                },
                img_sex: {
                    marginHorizontal: normalize(5),
                    height: normalize(20),
                    width: normalize(20)
                },
                description: {
                    fontSize: normalize(26),
                    marginVertical: normalize(10),
                    marginHorizontal: normalize(20),
                    paddingVertical: normalize(20),
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c",
                    color: "#333333"
                },  
                status: {
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: normalize(20),
                    paddingVertical: normalize(15),
                    paddingRight: normalize(20),
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c"
                },
                lblStatWrapper: {
                    width: "35%"
                },  
                progress: {
                    transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                    marginTop: normalize(3),
                    width: "65%",
                    height: normalize(20)
                },
                grpStat: {
                    flexDirection: "row",
                    alignSelf: "stretch"
                },
                atk: {
                    fontSize: normalize(20),
                    marginHorizontal: normalize(20),
                    color: "#333333"
                },
                def: {
                    fontSize: normalize(20),
                    marginHorizontal: normalize(20),
                    color: "#333333"
                },
                stm: {
                    fontSize: normalize(20),
                    marginHorizontal: normalize(20),
                    color: "#333333"
                },
            })
        );
    }
}