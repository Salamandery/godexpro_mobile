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
                    PkmCProws: {
                        flex: 1,
                        marginTop: normalize(5),
                        marginHorizontal: normalize(10),
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    },
                    row: {
                        paddingBottom: normalize(3),
                    },
                    values: {
                        paddingHorizontal: normalize(20),
                        paddingBottom: normalize(2),
                        fontSize: normalize(18),
                        color: "#333"
                    },
                    PkmCPheaders: {
                        alignSelf: "stretch",
                        paddingHorizontal: normalize(15),
                        justifyContent: "space-between",
                        backgroundColor: "#d9d9d9",
                        alignItems: "center",
                        flexDirection: "row",
                        borderBottomWidth: 1,
                        borderBottomColor: "#999",
                    },
                    label: {
                        fontSize: normalize(20),
                        fontWeight: "bold",
                        color: "#333"
                    },  
                    PkmCP: {
                        flex: 1,
                    }
                })
            );
        } else {
            return (StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#262626"
                    },
                    PkmCProws: {
                        flex: 1,
                        marginTop: normalize(5),
                        marginHorizontal: normalize(10),
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    },
                    row: {
                        paddingBottom: normalize(3),
                    },
                    values: {
                        paddingHorizontal: normalize(20),
                        paddingBottom: normalize(2),
                        fontSize: normalize(18),
                        color: "#cccccc"
                    },
                    PkmCPheaders: {
                        alignSelf: "stretch",
                        paddingHorizontal: normalize(15),
                        justifyContent: "space-between",
                        backgroundColor: "#333",
                        alignItems: "center",
                        flexDirection: "row",
                        borderBottomWidth: 1,
                        borderBottomColor: "#666666",
                    },
                    label: {
                        fontSize: normalize(20),
                        fontWeight: "bold",
                        color: "#cccccc"
                    },  
                    PkmCP: {
                        flex: 1,
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
                PkmCProws: {
                    flex: 1,
                    marginTop: normalize(5),
                    marginHorizontal: normalize(10),
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                },
                row: {
                    paddingBottom: normalize(3),
                },
                values: {
                    paddingHorizontal: normalize(20),
                    paddingBottom: normalize(2),
                    fontSize: normalize(18),
                    color: "#333"
                },
                PkmCPheaders: {
                    alignSelf: "stretch",
                    paddingHorizontal: normalize(15),
                    justifyContent: "space-between",
                    backgroundColor: "#f5d6eb",
                    alignItems: "center",
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: "#7a1f5c",
                },
                label: {
                    fontSize: normalize(20),
                    fontWeight: "bold",
                    color: "#333"
                },  
                PkmCP: {
                    flex: 1,
                }
            })
        );
    }
}