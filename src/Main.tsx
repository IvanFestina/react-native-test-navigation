import {RootStackParamList} from "./screens/types";
import {HomeScreen} from "./screens/Home/Home";
import {UsersScreen} from "./screens/Users/Users";
import {DetailsScreen} from "./screens/Details/Details";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

export const Main = () => {
    // const Stack = createNativeStackNavigator<RootStackParamList>();
    const Tab = createBottomTabNavigator<RootStackParamList>();
    // const Drawer = createDrawerNavigator();
//    "start": "expo start -c", в package.json с зачисткой кеша

    return (
        <Tab.Navigator screenOptions={({navigation, route}) => {
            let iconName: keyof typeof Ionicons.glyphMap
            if(route.name === 'Home') iconName = 'analytics'
            if(route.name === 'Users') iconName = 'bug'
            if(route.name === 'Details') iconName = 'car-sport'

            return {
                tabBarStyle: {backgroundColor: '#aca3fd'},
                tabBarIcon: ({focused}) => <Ionicons name={iconName} size={32} color={focused ? '#f1bcf1' : 'blue'}/>
            }

        }} initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
            <Tab.Screen name="Users" component={UsersScreen}/>
            <Tab.Screen name="Details" component={DetailsScreen}/>
        </Tab.Navigator>
    )
}

//TAB NAVIGATION
// return (
//         <Tab.Navigator screenOptions={({navigation, route}) => {
//             let iconName: keyof typeof Ionicons.glyphMap
//             if(route.name === 'Home') iconName = 'analytics'
//             if(route.name === 'Users') iconName = 'bug'
//             if(route.name === 'Details') iconName = 'car-sport'
//             return {
//                 tabBarStyle: {backgroundColor: '#aca3fd'},
//                 tabBarIcon: ({focused}) => <Ionicons name={iconName} size={32} color={focused ? 'red' : 'blue '}/>
//             }
//
//         }} initialRouteName="Home">
//             <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
//             <Tab.Screen name="Users" component={UsersScreen}/>
//             <Tab.Screen name="Details" component={DetailsScreen}/>
//         </Tab.Navigator>
//     )

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