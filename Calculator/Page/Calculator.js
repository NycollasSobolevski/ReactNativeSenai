import { Text } from "react-native";
import {Btn} from "../Components/Button";
import { View } from "react-native";
import { Button } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { Touchable } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CalculatorPage(params) {
    const navigator = useNavigation();
    const [str, setStr] = useState("");

    const Add = (params) => {
        setStr(str + params)
    }
    const Clear = () => {
        setStr("");
    }

    const Equals = () => {
        var res = eval(str);
        setStr(res);
    }

    const History = () => {
        navigator.navigate('Historic');
    }

    useEffect(() => {
        console.log(str);
    }, [str])

    return (
        <View style={styles.mainContainer}>
            <View>
                <Pressable
                    onPress={() => History()}
                    ><Text>Historic</Text>
                </Pressable>

                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>{str}</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.lineButton}>
                    <Btn 
                        title="7"
                        click={Add}
                    />
                    <Btn 
                        title="8"
                        click={Add}
                    />
                    <Btn 
                        title="9"
                        click={Add}
                    />
                    <Btn 
                        title="*"
                        click={Add}
                    />
                </View>
                <View style={styles.lineButton}>

                    <Btn 
                        title="4"
                        click={Add}
                    />
                    <Btn 
                        title="5"
                        click={Add}
                    />
                    <Btn 
                        title="6"
                        click={Add}
                    />
                    <Btn 
                        title="-"
                        click={Add}
                    />
                </View>
                
                <View style={styles.lineButton}>
                    <Btn 
                        title="1"
                        click={Add}
                        />
                    <Btn 
                        title="2"
                        click={Add}
                        />
                    <Btn 
                        title="3"
                        click={Add}
                        />
                    <Btn 
                        title="+"
                        click={Add}
                        />
                </View>
                <View style={styles.lineButton}>
                    <Btn 
                        title="0"
                        click={Add}
                    />
                    <Btn 
                        title="."
                        click={Add}
                    />
                    <Btn 
                        title="C"
                        click={Clear}
                    />
                    <Btn 
                        title="="
                        click={Equals}
                    />
                </View>
                <Button title="Historic" onPress={History} />
            </View>
        </View>
    )
}