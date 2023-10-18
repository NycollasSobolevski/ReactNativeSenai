import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorPage from './Page/Calculator';
import HistoricPage from './Page/Historic';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Calculator' options={{headerShown:false}} component={CalculatorPage} />
        <Stack.Screen  name='Historic' component={HistoricPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}