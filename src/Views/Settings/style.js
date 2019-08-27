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
                    SettingsItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(20),
                        alignSelf: "stretch",
                        justifyContent: "center",
                    },
                    grpSetting: {
                        alignSelf: "stretch",
                        borderColor: "#bfbfbf",
                        borderBottomWidth: 1,
                        paddingVertical: normalize(10),
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start"
                    },
                    Title: {
                        fontSize: normalize(28),
                        color: "#333333"
                    },
                    Des: {
                        fontSize: normalize(18),
                        color: "#737373"
                    },
                    Opt: {
                        alignSelf: "flex-end",
                        position: "absolute",
                        right: 7,
                        top: 15
                    }
                })
            );
        } else {
            return (StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#262626"
                    },
                    SettingsItens: {
                        paddingVertical: normalize(10),
                        paddingHorizontal: normalize(20),
                        alignSelf: "stretch",
                        justifyContent: "center",
                    },
                    grpSetting: {
                        alignSelf: "stretch",
                        borderColor: "#666666",
                        borderBottomWidth: 1,
                        paddingVertical: normalize(10),
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start"
                    },
                    Title: {
                        fontSize: normalize(28),
                        color: "#cccccc",
                    },
                    Des: {
                        fontSize: normalize(18),
                        color: "#cccccc"
                    },
                    Opt: {
                        alignSelf: "flex-end",
                        position: "absolute",
                        right: 7,
                        top: 15
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
                SettingsItens: {
                    paddingVertical: normalize(10),
                    paddingHorizontal: normalize(20),
                    alignSelf: "stretch",
                    justifyContent: "center",
                },
                grpSetting: {
                    alignSelf: "stretch",
                    borderColor: "#7a1f5c",
                    borderBottomWidth: 1,
                    paddingVertical: normalize(10),
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                },
                Title: {
                    fontSize: normalize(28),
                    color: "#333333"
                },
                Des: {
                    fontSize: normalize(18),
                    color: "#737373"
                },
                Opt: {
                    alignSelf: "flex-end",
                    position: "absolute",
                    right: 7,
                    top: 15
                }
            })
        );
    }
}