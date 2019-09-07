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
                        marginHorizontal: normalize(10),
                        zIndex: 2
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
                        flex: 1,
                        flexWrap: "wrap"
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
                        alignSelf: "center",
                        marginTop: normalize(-50)
                    },
                    typeGroup: {
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        zIndex: 1
                    },
                    txtType: {
                        color: "#cccccc",
                        marginVertical: normalize(5)
                    },
                    type: {
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    genderGroup: {
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    },
                    txtGender: {
                        color: "#cccccc",
                        marginBottom: normalize(5),
                        textAlign: "center"
                    },
                    gender: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    lblGender: {
                        fontSize: normalize(12),
                        color: "#cccccc",
                        textAlign: "center"
                    },
                    img_sex: {
                        marginHorizontal: normalize(5),
                        height: normalize(20),
                        width: normalize(20)
                    },
                    sizeAndHeight: {
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        alignSelf: "stretch",
                    },
                    Height: {
                        width: "50%",
                        borderRightWidth: 1,
                        borderRightColor: "#666666",
                    },
                    Weight: {
                        width: "50%",
                    },
                    titlesizeAndHeight: {
                        alignSelf: "stretch",
                        fontSize: normalize(14),
                        textAlign: "center",
                        color: "#cccccc",
                    },
                    txtsizeAndHeight: {
                        alignSelf: "stretch",
                        fontSize: normalize(20),
                        textAlign: "center",
                        color: "#cccccc",
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
                        width: "37%",
                    },  
                    progress: {
                        transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                        marginTop: normalize(9),
                        width: "65%",
                        height: normalize(20)
                    },
                    grpStat: {
                        flexDirection: "row",
                        alignSelf: "stretch"
                    },
                    atk: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#cccccc",
                    },
                    def: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#cccccc",
                    },
                    stm: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#cccccc",
                    },
                    cp: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
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
                        marginHorizontal: normalize(10),
                        zIndex: 2
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
                        flex: 1,
                        flexWrap: "wrap"
                    },
                    InfoItens: {
                        flex: 1,
                        borderTopColor: "#bfbfbf",
                        borderTopWidth: 1
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
                        alignSelf: "center",
                        marginTop: normalize(-50)
                    },
                    typeGroup: {
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        zIndex: 1
                    },
                    txtType: {
                        color: "#333333",
                        marginVertical: normalize(5)
                    },
                    type: {
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    genderGroup: {
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    },
                    txtGender: {
                        color: "#333333",
                        marginBottom: normalize(5),
                        textAlign: "center"
                    },
                    gender: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    lblGender: {
                        fontSize: normalize(12),
                        color: "#333333",
                        textAlign: "center"
                    },
                    img_sex: {
                        marginHorizontal: normalize(5),
                        height: normalize(20),
                        width: normalize(20)
                    },
                    sizeAndHeight: {
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        alignSelf: "stretch",
                    },
                    Height: {
                        width: "50%",
                        borderRightWidth: 1,
                        borderRightColor: "#bfbfbf",
                    },
                    Weight: {
                        width: "50%"
                    },
                    titlesizeAndHeight: {
                        alignSelf: "stretch",
                        fontSize: normalize(14),
                        textAlign: "center",
                        color: "#333333",
                    },
                    txtsizeAndHeight: {
                        alignSelf: "stretch",
                        fontSize: normalize(20),
                        textAlign: "center",
                        color: "#333333",
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
                        width: "37%"
                    },  
                    progress: {
                        transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                        marginTop: normalize(9),
                        width: "65%",
                        height: normalize(20)
                    },
                    grpStat: {
                        flexDirection: "row",
                        alignSelf: "stretch"
                    },
                    atk: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#333333"
                    },
                    def: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#333333"
                    },
                    stm: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#333333"
                    },
                    cp: {
                        fontSize: normalize(18),
                        marginLeft: normalize(20),
                        color: "#333333",
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
                    marginHorizontal: normalize(10),
                    zIndex: 2
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
                    flex: 1,
                    flexWrap: "wrap"
                },
                InfoItens: {
                    flex: 1,
                    borderTopColor: "#7a1f5c",
                    borderTopWidth: 1
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
                    alignSelf: "center",
                    marginTop: normalize(-50)
                },
                typeGroup: {
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    zIndex: 1
                },
                txtType: {
                    color: "#333333",
                    marginVertical: normalize(5)
                },
                type: {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                },
                genderGroup: {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                txtGender: {
                    color: "#333333",
                    marginBottom: normalize(5),
                    textAlign: "center"
                },
                gender: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                },
                lblGender: {
                    fontSize: normalize(12),
                    color: "#333333",
                    textAlign: "center"
                },
                img_sex: {
                    marginHorizontal: normalize(5),
                    height: normalize(20),
                    width: normalize(20)
                },
                sizeAndHeight: {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignSelf: "stretch",
                },
                Height: {
                    width: "50%",
                    borderRightWidth: 1,
                    borderRightColor: "#7a1f5c",
                },
                Weight: {
                    width: "50%"
                },
                titlesizeAndHeight: {
                    alignSelf: "stretch",
                    fontSize: normalize(14),
                    textAlign: "center",
                    color: "#333333",
                },
                txtsizeAndHeight: {
                    alignSelf: "stretch",
                    fontSize: normalize(20),
                    textAlign: "center",
                    color: "#333333",
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
                    width: "37%"
                },  
                progress: {
                    transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                    marginTop: normalize(9),
                    width: "65%",
                    height: normalize(20)
                },
                grpStat: {
                    flexDirection: "row",
                    alignSelf: "stretch"
                },
                atk: {
                    fontSize: normalize(18),
                    marginLeft: normalize(20),
                    color: "#333333"
                },
                def: {
                    fontSize: normalize(18),
                    marginLeft: normalize(20),
                    color: "#333333"
                },
                stm: {
                    fontSize: normalize(18),
                    marginLeft: normalize(20),
                    color: "#333333"
                },
                cp: {
                    fontSize: normalize(18),
                    marginLeft: normalize(20),
                    color: "#333333",
                },
            })
        );
    }
}