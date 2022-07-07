import {Button, Text, View} from "react-native";
import {RootType, useAppNavigation} from "../types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootType>();

const LoginScreen = () => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title={'To Registration screen'} onPress={() => navigation.navigate('Home', {screen: 'Registration'})}/>
            //мы сначала переходим на screen 'Home', а потом переходим на скрин Логин. Вложенная навигация.
            <Button title={'To Forgot screen'} onPress={() => navigation.navigate('Home', {screen: 'Forgot'})}/>
        </View>
    )
}
const RegistrationScreen = () => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text>Registration Screen</Text>
            <Button title={'To Login screen'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}/>
        </View>
    )
}

const ForgotScreen = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text>ForgotScreen</Text>
            <Button title={'To Login screen'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}/>
        </View>
    )
}


export function HomeScreen() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Login'} component={LoginScreen}/>
            <Stack.Screen name={'Registration'} component={RegistrationScreen}/>
            <Stack.Screen name={'Forgot'} component={ForgotScreen}/>
        </Stack.Navigator>
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>Home Screen</Text>
        //     <Button title={'To Users screen'} onPress={() => navigation.navigate('Users', {id: 1000, name: 'Sergey'})}>
        //     </Button>
        //     <Button title={'To Details screen'} onPress={() => navigation.navigate('Details')}>
        //     </Button>
        // </View>
    );
}