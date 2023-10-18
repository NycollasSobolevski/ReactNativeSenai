import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        top:130,        
        justifyContent:"center",
        alignItems:"center",
        gap:15
    },
    buttonsContainer: {
        justifyContent:"center",
        alignItems:"center",
        gap:15
    },
    lineButton: {
        flexDirection:"row",
        gap:15
    },
    resultContainer: {
        height:60,
        width:250,
        borderWidth:2,
        borderColor: "#000",
        borderRadius:15,
        paddingRight:10,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    resultText :{
        fontWeight:"bold",
        fontSize:"x-large"

    }
})

export {styles}