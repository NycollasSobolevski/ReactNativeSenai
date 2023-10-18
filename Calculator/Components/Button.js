import { View } from "react-native"
import { Pressable } from "react-native";
import { Touchable } from "react-native";
import { Text } from "react-native"
import { Button } from "react-native"
import { StyleSheet } from "react-native";

const Btn = (params) => {
    const pss =( ) => {
        console.log("press");
    }
    return (
        <>
            <Pressable 
                style={style.btn}
                onPress={() => params.click(params.title)}
            >
                <Text>{params.title}</Text> 
            </ Pressable>
        </>
    )
}


const style = StyleSheet.create({
    btn: {
        width: 70,
        height: 70,
        backgroundColor: "#898",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15        
    }
})

export {Btn}