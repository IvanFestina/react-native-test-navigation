import {
    useNavigation,
    NavigatorScreenParams,
    NavigationProp
} from "@react-navigation/native";

export type RootMainParamList = {
    LoginScreen: undefined
    //SignUp
    TabList: NavigatorScreenParams<RootTabParamList>
}

export type RootTabParamList = {
    Profile: NavigatorScreenParams<ProfileType>
    Dialogs: NavigatorScreenParams<DialogsType>
    Settings: NavigatorScreenParams<SettingsType>
}
export type ProfileType = {
    ProfileInfo: undefined
    ProfilePhoto: undefined
}
export type DialogsType = {
    Messages: undefined
    Groups: undefined
    ForSave: undefined
}
export type SettingsType = {
    Language: undefined
    Time: undefined
    Private: undefined
    Logout: undefined
}

export type UseNavigationType = NavigationProp<RootMainParamList>
export const useAppNavigation = () => useNavigation<UseNavigationType>()
//
//
//  Home: NavigatorScreenParams<RootType>;
//     //у нас есть родительский экран, который содержит в себе под экраны <RootType>
//     //чтобы прыгнуть в экран ребенка Login , мы сначала обращаемся к родителю, Home
//     // который содержит в себя Login, Registration, Forgot
//     // Home => Login
//     //             <Button title={'To Login screen'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}/>
//     //если прыгать еще глубже ('Home', {screen: 'Login', params: {screen: 'Name'})
//     Users: {id: number, name: string} | undefined;
//     Details: undefined;

  // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>Home Screen</Text>
        //     <Button title={'To Users screen'} onPress={() => navigation.navigate('Users', {id: 1000, name: 'Sergey'})}>
        //     </Button>
        //     <Button title={'To Details screen'} onPress={() => navigation.navigate('Details')}>
        //     </Button>
        // </View>
//     );
// }