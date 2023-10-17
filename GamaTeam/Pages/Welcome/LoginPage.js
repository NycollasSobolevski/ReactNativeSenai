import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {styles} from './styles'

function LoginPage (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.defaultText}> Login </Text>
            <View >
                <View  style={styles.inputContainer}>
                    <Text style={styles.defaultText}>Login</Text>
                    <TextInput 
                        style={ styles.input}
                        keyboardType='email'
                        inputMode='email'
                        autoComplete='email'
                    ></TextInput>
                </View>
                <View style={styles.inputContainer} >
                    <Text style={styles.defaultText}>Password</Text>
                    <TextInput 
                        style={ styles.input}
                        secureTextEntry={true} 
                    ></TextInput>
                </View>
                <View>
                    <Button title='Login' />
                </View>
            </View>
        </View >
    );
}

function SignUpPage() {
    return (

        <View style={styles.container}>
            <Text style={styles.defaultText}>
                SingUp your new account
            </Text>

            <View>
                <View  style={styles.inputContainer}>
                    <Text style={styles.defaultText}>Login</Text>
                    <TextInput 
                        style={ styles.input}
                        keyboardType='default'
                        inputMode='text'
                        autoComplete='username'
                    ></TextInput>
                </View>
                <View  style={styles.inputContainer}>
                    <Text style={styles.defaultText}>Email</Text>
                    <TextInput 
                        style={ styles.input}
                        keyboardType='email'
                        inputMode='email'
                        autoComplete='email'
                    ></TextInput>
                </View>
                <View style={styles.inputContainer} >
                    <Text style={styles.defaultText}>Password</Text>
                    <TextInput 
                        style={ styles.input}
                        secureTextEntry={true} 
                    ></TextInput>
                </View>
                <View>
                    <Button title='Signip' />
                </View>
            </View>
        </View>
        
    )
}


export { LoginPage, SignUpPage };