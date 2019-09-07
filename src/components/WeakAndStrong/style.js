import {
    StyleSheet
} from 'react-native';
import { normalize } from '../StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === "true") {
            return (
                StyleSheet.create({
                    groupAgainst: {
                        alignSelf: "stretch",
                        marginTop: normalize(10),
                        flexDirection: "row",
                        alignContent: "stretch",
                        justifyContent: "center",
                        paddingVertical: normalize(20),
                        paddingHorizontal: normalize(10),
                        marginHorizontal: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#666666",
                    },
                    weakness: {
                        width: "50%",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignContent: "stretch"
                    },
                    weakTitle: {
                        backgroundColor: "#333",
                    },  
                    txtWeak: {
                        textAlign: "center",
                        fontSize: normalize(20),
                        color: "#cccccc"
                    },
                    weakItems: {
                        height: normalize(150),
                        borderTopColor: "#666666",
                        borderTopWidth: 1,
                        backgroundColor: "#333",
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(5),
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    },
                    strongest: {
                        width: "50%",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignContent: "stretch"
                    },
                    strongTitle: {
                        backgroundColor: "#333",
                    },
                    txtStrong: {
                        textAlign: "center",
                        fontSize: normalize(20),
                        color: "#cccccc"
                    },
                    strongItems: {
                        height: normalize(150),
                        borderTopColor: "#666666",
                        borderTopWidth: 1,
                        backgroundColor: "#333",
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(5),
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    },
                })
            );
        } else {
            return (
                StyleSheet.create({
                    groupAgainst: {
                        alignSelf: "stretch",
                        marginTop: normalize(10),
                        flexDirection: "row",
                        alignContent: "stretch",
                        justifyContent: "center",
                        paddingVertical: normalize(20),
                        paddingHorizontal: normalize(10),
                        marginHorizontal: normalize(20),
                        borderTopWidth: 1,
                        borderTopColor: "#bfbfbf",
                    },
                    weakness: {
                        width: "50%",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignContent: "stretch"
                    },
                    weakTitle: {
                        backgroundColor: "#d9d9d9",
                    },  
                    txtWeak: {
                        textAlign: "center",
                        fontSize: normalize(20),
                        color: "#333333"
                    },
                    weakItems: {
                        height: normalize(150),
                        borderTopColor: "#f2f2f2",
                        borderTopWidth: 1,
                        backgroundColor: "#d9d9d9",
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(5),
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    },
                    strongest: {
                        width: "50%",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignContent: "stretch"
                    },
                    strongTitle: {
                        backgroundColor: "#d9d9d9",
                    },
                    txtStrong: {
                        textAlign: "center",
                        fontSize: normalize(20),
                        color: "#333333"
                    },
                    strongItems: {
                        height: normalize(150),
                        borderTopColor: "#f2f2f2",
                        borderTopWidth: 1,
                        backgroundColor: "#d9d9d9",
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(5),
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    },
                })
            ); 
        }
    } else {
        return (
            StyleSheet.create({
                groupAgainst: {
                    alignSelf: "stretch",
                    marginTop: normalize(10),
                    flexDirection: "row",
                    alignContent: "stretch",
                    justifyContent: "center",
                    paddingVertical: normalize(20),
                    paddingHorizontal: normalize(10),
                    marginHorizontal: normalize(20),
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c",
                },
                weakness: {
                    width: "50%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignContent: "stretch"
                },
                weakTitle: {
                    backgroundColor: "#f5d6eb",
                },  
                txtWeak: {
                    textAlign: "center",
                    fontSize: normalize(20),
                    color: "#333333"
                },
                weakItems: {
                    height: normalize(150),
                    borderTopColor: "#7a1f5c",
                    borderTopWidth: 1,
                    backgroundColor: "#f5d6eb",
                    paddingVertical: normalize(10),
                    paddingHorizontal: normalize(5),
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap"
                },
                strongest: {
                    width: "50%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignContent: "stretch"
                },
                strongTitle: {
                    backgroundColor: "#f5d6eb",
                },
                txtStrong: {
                    textAlign: "center",
                    fontSize: normalize(20),
                    color: "#333333"
                },
                strongItems: {
                    height: normalize(150),
                    borderTopColor: "#7a1f5c",
                    borderTopWidth: 1,
                    backgroundColor: "#f5d6eb",
                    paddingVertical: normalize(10),
                    paddingHorizontal: normalize(5),
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap"
                },
            })
        ); 
    }
}