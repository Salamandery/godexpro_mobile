import {
    StyleSheet
} from 'react-native';
import { normalize } from '../StringTrataments';
export function StyleTheme(theme, mode) {
    if (mode === "default") {
        if (theme === "true") {
            return (
                StyleSheet.create({
                    groupWeather: {
                        marginHorizontal: normalize(20),
                        marginBottom: normalize(50),
                        paddingHorizontal: normalize(10),
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    weather: {
                        alignSelf: "stretch",
                        paddingVertical: 1,
                        backgroundColor: "#333333",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    },
                    title: {
                        color: "#cccccc",
                        fontSize: normalize(24),
                        alignSelf: "stretch",
                        textAlign: "center",
                    },
                    ico: {
                        height: normalize(46),
                        width: normalize(46)
                    },
                    imgWrapper: {
                        paddingVertical: normalize(10),
                        borderTopWidth: 1,
                        borderTopColor: "#666666",
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row"
                    }
                })
            );
        } else {
            return (
                StyleSheet.create({
                    groupWeather: {
                        marginHorizontal: normalize(20),
                        marginBottom: normalize(50),
                        paddingHorizontal: normalize(10),
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    weather: {
                        alignSelf: "stretch",
                        paddingVertical: 1,
                        backgroundColor: "#d9d9d9",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    },
                    title: {
                        color: "#333333",
                        fontSize: normalize(24),
                        alignSelf: "stretch",
                        textAlign: "center",
                    },
                    ico: {
                        height: normalize(46),
                        width: normalize(46)
                    },
                    imgWrapper: {
                        paddingVertical: normalize(10),
                        borderTopWidth: 1,
                        borderTopColor: "#f2f2f2",
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row"
                    }
                })
            ); 
        }
    } else {
        return (
            StyleSheet.create({
                groupWeather: {
                    marginHorizontal: normalize(20),
                    marginBottom: normalize(50),
                    paddingHorizontal: normalize(10),
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center",
                },
                weather: {
                    alignSelf: "stretch",
                    paddingVertical: 1,
                    backgroundColor: "#f5d6eb",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                },
                title: {
                    color: "#333333",
                    fontSize: normalize(24),
                    alignSelf: "stretch",
                    textAlign: "center",
                },
                ico: {
                    height: normalize(46),
                    width: normalize(46)
                },
                imgWrapper: {
                    paddingVertical: normalize(10),
                    borderTopWidth: 1,
                    borderTopColor: "#7a1f5c",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                }
            })
        ); 
    }
}