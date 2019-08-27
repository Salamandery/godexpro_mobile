import {
    StyleSheet
} from 'react-native';

export function StyleTheme(theme) {
    if (theme === false) {
        return (StyleSheet.create({
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
                    marginBottom: 10,
                    padding: 2,
                    backgroundColor: "#b30000",
                    borderWidth: 1,
                    borderColor: "#8b0000",
                    borderRadius: 5,
                },
                txtModalClose: {
                    color: "#cccccc",
                    fontSize: 22
                },
                ModalImgWrapper: {
                    padding: 5,
                    alignSelf: "stretch",
                    backgroundColor: "lightblue",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: "#246175",
                },
                ModalItemImg: {
                    height: 100,
                    width: 100
                },
                ModalTitle: {
                    fontSize: 30,
                    color: "#333333"
                },
                status: {
                    alignSelf: "stretch",
                    marginHorizontal: 30,
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
                    transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                    marginTop: 3,
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
                    fontSize: 20,
                    color: "#333333",
                },
                def: {
                    textAlign: "center",
                    fontSize: 20,
                    color: "#333333",
                },
                stm: {
                    textAlign: "center",
                    fontSize: 20,
                    color: "#333333",
                },
                ModalNextInfo: {
                    marginTop: 5,
                    backgroundColor: "lightblue",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: "#246175",
                },
                lblModalNext: {
                    fontSize: 20,
                    color: "#333333",
                },
                searchBox: {
                    paddingVertical: 2,
                    alignSelf: "stretch",
                    borderWidth: 1,
                    borderColor: "#bfbfbf",
                    paddingHorizontal: 10,
                },
                searchInput: {
                    fontSize: 20,
                    color: "#333333",
                }
            })
        );
    } else {
        return (StyleSheet.create({
                modalContainer: {
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,.2)"
                },
                pkmModalInfo: {
                    height: "45%",
                    borderTopWidth: 1,
                    borderTopColor: "lightblue",
                    alignSelf: "stretch",
                    backgroundColor: "#262626",
                    justifyContent: "flex-start",
                    alignItems: "center"
                },
                ModalClose: {
                    marginBottom: 10,
                    padding: 2,
                    backgroundColor: "#b30000",
                    borderWidth: 1,
                    borderColor: "#8b0000",
                    borderRadius: 5,
                },
                txtModalClose: {
                    color: "#cccccc",
                    fontSize: 22
                },
                ModalImgWrapper: {
                    padding: 5,
                    alignSelf: "stretch",
                    backgroundColor: "#246175",
                    borderBottomWidth: 1,
                    borderBottomColor: "lightblue",
                    justifyContent: "center",
                    alignItems: "center"
                },
                ModalItemImg: {
                    height: 100,
                    width: 100
                },
                ModalTitle: {
                    fontSize: 30,
                    color: "#cccccc"
                },
                status: {
                    alignSelf: "stretch",
                    marginHorizontal: 30,
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
                    transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
                    marginTop: 3,
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
                    fontSize: 20,
                    color: "#cccccc",
                },
                def: {
                    textAlign: "center",
                    fontSize: 20,
                    color: "#cccccc",
                },
                stm: {
                    textAlign: "center",
                    fontSize: 20,
                    color: "#cccccc",
                },
                ModalNextInfo: {
                    marginTop: 5,
                    backgroundColor: "#246175",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: "lightblue",
                },
                lblModalNext: {
                    fontSize: 20,
                    color: "#cccccc",
                },
                searchBox: {
                    paddingVertical: 2,
                    alignSelf: "stretch",
                    borderWidth: 1,
                    borderColor: "#666666",
                    paddingHorizontal: 10,
                },
                searchInput: {
                    fontSize: 20,
                    color: "#cccccc",
                }
            })
        ); 
    }
}

