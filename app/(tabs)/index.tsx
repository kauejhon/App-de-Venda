import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native';
import Login from '@/src/components/Login';
import Home from '@/src/components/Home';

const Stack = createNativeStackNavigator();

function RootStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="login"
            component={Login}
            />
            <Stack.Screen 
            name='Home'
            component={Home} />
        </Stack.Navigator>
        
    )

}

export default function App() {
    return(
            <RootStack />
        
    )
}