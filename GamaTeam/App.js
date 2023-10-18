import 'react-native-gesture-handler'
import {LoginPage, SignUpPage} from './Pages/Welcome/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import WelcomePage from './Pages/Welcome/WelcomePage';
import UsersPage from './Pages/usersPage';
import { UsersProvider } from './Context/UsersContext';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <UsersProvider>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomePage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name='Users' options={{headerShown:false}} component={UsersPage} />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
}

