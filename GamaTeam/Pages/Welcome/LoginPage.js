import { Button, Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import {styles} from './styles'
import SelectDropdown from 'react-native-select-dropdown';
import { Switch } from 'react-native';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UsersContext, UsersProvider } from '../../Context/UsersContext';

function LoginPage (props) {
    const { Login } = useContext(UsersContext)
    const navigation = useNavigation();

    const [identify, setIdentify] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        var user = {
            identify: identify,
            password: password
        }

        if(Login(user))
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
                        value={identify}
                        onChangeText={setIdentify}
                    ></TextInput>
                </View>
                <View style={ styles.inputContainer } >
                    <Text style={ styles.defaultText }>Password</Text>
                    <TextInput 
                        style={ styles.input }
                        secureTextEntry={ true } 
                        value={password}
                        onChangeText={setPassword}
                    ></TextInput>
                </View>
                <View>
                    <Button 
                        title='Login' 
                        color="#82828" 
                        onPress={ login }
                    />
                </View>
            </View>
        </View >
    );
}

function SignUpPage() {

    const { addUser } = useContext(UsersContext)


    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ age, setAge ] = useState("");
    const [ password, setPassword] = useState("");
    const [ repassword, setRepassword] = useState("");
    const [notify, setNotify] = useState(true);
    const selectGender = ["Male", "Female"];
    const [ gender, setGender ] = useState("");

    const toggleNotify = () => setNotify(!notify);

    const verifyData = () => {
        if(!name || !email || !age || !password || !repassword || !gender) return false;
        if(password != repassword) return false;
        if(!email.includes("@") || !email.includes(".com")) return false;
        if(name.length < 4) return false;
    
        return true;
    }

    const subscribe = () => {
        if(!verifyData()){
            console.log("inconsists data");
            return
        }
        var data = {
            Name: name,
            Email: email,
            Age: age,
            Password: password,
            Notify: notify,
            Gender: gender
        };

        addUser(data);
    }



    return (
        <>
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
                            style={ styles.fullInput}
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
                                style={ styles.fullInput}
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
                                rowTextStyle={styles.defaultText}
                                buttonTextStyle={styles.defaultText}
                                buttonStyle={styles.input}
                                dropdownStyle={styles.inputContainer}
                                onSelect={(selectedItem, index) => {setGender(selectedItem)}}
                            /> 
                        </View>
                    </View>

                    <View  style={styles.inputContainer}>
                        <Text style={styles.defaultText}>Email</Text>
                        <TextInput 
                            style={ styles.fullInput}
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
                            style={ styles.fullInput}
                            secureTextEntry={true} 
                            value={password}
                            onChangeText={setPassword}
                        ></TextInput>
                    </View>
                    <View style={styles.inputContainer} >
                        <Text style={styles.defaultText}>Password</Text>
                        <TextInput 
                            style={ styles.fullInput}
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
                        <Button 
                            title='SignUp' 
                            onPress={subscribe} 
                        />
                    </View>
                </View>
            </View>
        </>        
    )
}


export { LoginPage, SignUpPage };