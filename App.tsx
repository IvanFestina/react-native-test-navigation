import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootMainParamList} from "./src/types/types";
import LoginScreen from "./src/LoginScreen";
import {TabList} from "./src/TabList";

const MainStack = createNativeStackNavigator<RootMainParamList>()

export default function App() {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName={'LoginScreen'} screenOptions={{headerShown: false}}>
                <MainStack.Screen name={'LoginScreen'} component={LoginScreen}/>
                <MainStack.Screen name={'TabList'} component={TabList}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
};

