import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../types/types";
import {AntDesign } from "@expo/vector-icons";
import DialogsScreen from "./DialogsScreen";
import SettingsScreen from "./SettingsScreen";
import ProfileScreen from "./ProfileScreen";


export const TabList = () => {

    // const Drawer = createDrawerNavigator();
//    "start": "expo start -c", в package.json с зачисткой кеша

    const Tab = createBottomTabNavigator<RootTabParamList>();

    return (
        <Tab.Navigator screenOptions={({route}) => {
            let iconName: keyof typeof AntDesign.glyphMap
            if (route.name === 'Profile') iconName = 'profile'
            if (route.name === 'Dialogs') iconName = 'message1'
            if (route.name === 'Settings') iconName = 'setting'
            return {
                tabBarStyle: {backgroundColor: '#65b46d'},
                tabBarIcon: ({focused}) => <AntDesign name={iconName} size={32}
                color={focused ? '#ffffff' : '#206623'}
                />
            }
        }}>
            <Tab.Screen name={'Profile'} component={ProfileScreen}/>
            <Tab.Screen name={'Dialogs'} component={DialogsScreen}/>
            <Tab.Screen name={'Settings'} component={SettingsScreen}/>
        </Tab.Navigator>
    )
}


//DRAWER NAVIGATION

//чтобы поставить drawer navigation нужно в babel.config добавить plugins: ['react-native-reanimated/plugin'],

// const Drawer = createDrawerNavigator();
// //    "start": "expo start -c", в package.json с зачисткой кеша
//
// return (
//     <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
//         <Drawer.Screen name="Users" component={UsersScreen}/>
//         <Drawer.Screen name="Details" component={DetailsScreen}/>
//     </Drawer.Navigator>
// )