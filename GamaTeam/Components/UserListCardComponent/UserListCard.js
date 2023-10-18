import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import { styles } from "./styles";

export default function UserListCard ( params ) {
    const username = params.user.Name;
    const age = params.user.Age;
    const gender = params.user.Gender;
    const notify = params.user.Notify;

    console.log(params);

    // useEffect(() => {
    //     setUserlist(...userList, sessionStorage.getItem('userlist'));
    // })

    return (
        <>
            <View style={styles.container}>
                <Text>Name: {username}</Text>
                <Text>Age: {age}</Text>
                <Text>Gender: {gender}</Text>
                <Text>Notification: {notify}</Text>
            </View>
        </>
    )
}
