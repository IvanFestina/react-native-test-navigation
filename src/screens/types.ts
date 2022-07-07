import {NavigationProp, useNavigation, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackScreenProps} from '@react-navigation/native-stack'

export type RootStackParamList = {
    Home: NavigatorScreenParams<RootType>;
    //у нас есть родительский экран, который содержит в себе под экраны <RootType>
    //чтобы прыгнуть в экран ребенка Login , мы сначала обращаемся к родителю, Home
    // который содержит в себя Login, Registration, Forgot
    // Home => Login
    //             <Button title={'To Login screen'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}/>
    //если прыгать еще глубже ('Home', {screen: 'Login', params: {screen: 'Name'})

    Users: {id: number, name: string} | undefined;
    Details: undefined;
};
export type RootType = {
    Login: undefined
    Registration: undefined
    Forgot: undefined
}
//тип дляя Navigation  мы запихиваем самый родительский самый главный.
export type NavigationUseType = NavigationProp<RootStackParamList>
export const useAppNavigation = () => useNavigation<NavigationUseType>()

export type HomePropsType = NativeStackScreenProps<RootStackParamList, 'Home'>
export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>
export type DetailsPropsType = NativeStackScreenProps<RootStackParamList, 'Details'>

