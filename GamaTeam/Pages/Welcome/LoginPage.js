import { Button, Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import {styles} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { Switch } from 'react-native';

import perfilImage from "../../assets/Perfil-vetor.jpg"
import { ImageComponent } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function LoginPage (props) {
    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('Users')
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.pageTitleHeader }> LOGIN </Text>
            <View >
                <View  style={ styles.inputContainer }>
                    <Text style={ styles.defaultText }>Login</Text>
                    <TextInput 
                        style={ styles.input }
                        keyboardType='email'
                        inputMode='email'
                        autoComplete='email'
                    ></TextInput>
                </View>
                <View style={ styles.inputContainer } >
                    <Text style={ styles.defaultText }>Password</Text>
                    <TextInput 
                        style={ styles.input }
                        secureTextEntry={ true } 
                    ></TextInput>
                </View>
                <View>
                    <Button title='Login' color="#82828" onPress={ login }/>
                </View>
            </View>
        </View >
    );
}

function SignUpPage() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ age, setAge ] = useState("");
    const [ password, setPassword] = useState("");
    const [ repassword, setRepassword] = useState("");
    const [notify, setNotify] = useState(true);
    const selectGender = ["Male", "Female"];
    const [ gender, setGender ] = useState("");

    const toggleNotify = () => setNotify(!notify);

    const subscribe = () => {
        console.log(name + email + age + gender +password + repassword + notify);
    }

    return (

        <View style={styles.main}>
            <Text style={styles.defaultText} >
                SingUp your new account
            </Text>
            <Image 
                style={styles.image}
                source={{uri:"https://static.vecteezy.com/ti/vetor-gratis/p3/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gratis-vetor.jpg"}}
            />
            <View>
                <View  style={styles.inputContainer}>
                    <Text style={styles.defaultText}>Name</Text>
                    <TextInput 
                        style={ styles.input}
                        keyboardType='default'
                        inputMode='text'
                        autoComplete='username'
                        value={name}
                        onChangeText={ setName }
                    ></TextInput>
                </View>

                <View style={styles.rowContainer}>
                    <View  style={styles.inputContainer}>
                        <Text style={styles.defaultText}>Age</Text>
                        <TextInput 
                            style={ styles.input}
                            keyboardType='number'
                            inputMode='number'
                            autoComplete='age'
                            value={age}
                            onChangeText={setAge}
                        ></TextInput>
                    </View>
                    <View  style={styles.inputContainer}>
                        <Text style={styles.defaultText}>Gender</Text>
                        <SelectDropdown 
                            data={selectGender}
                            buttonStyle={styles.input}
                            dropdownStyle={styles.inputContainer}
                            onSelect={(selectedItem, index) => {setGender(selectedItem)}}
                        /> 
                    </View>
                </View>

                <View  style={styles.inputContainer}>
                    <Text style={styles.defaultText}>Email</Text>
                    <TextInput 
                        style={ styles.input}
                        keyboardType='email'
                        inputMode='email'
                        autoComplete='email'
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer} >
                    <Text style={styles.defaultText}>Password</Text>
                    <TextInput 
                        style={ styles.input}
                        secureTextEntry={true} 
                        value={password}
                        onChangeText={setPassword}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer} >
                    <Text style={styles.defaultText}>Password</Text>
                    <TextInput 
                        style={ styles.input}
                        secureTextEntry={true} 
                        value={repassword}
                        onChangeText={setRepassword}
                    ></TextInput>
                </View>
    
                <View style={styles.inputContainer} >
                    <Text style={styles.defaultText}>Desejo Receber Notificações</Text>
                    <Switch 
                        value={notify} 
                        onValueChange={toggleNotify}
                    />
                </View>

                <View>
                    <Button title='SignUp' onPress={subscribe} />
                </View>
            </View>
        </View>
        
    )
}


export { LoginPage, SignUpPage };