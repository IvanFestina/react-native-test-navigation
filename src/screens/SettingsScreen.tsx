import React from 'react';
import {Button, Text, View} from "react-native";
import {SettingsType, useAppNavigation} from "../types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {styles} from "./ProfileScreen";

const Language = () => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text style={styles.header}>Language</Text>
            <Button title={'To Time'} onPress={() => navigation.navigate('TabList', {screen: 'Settings', params: {screen: 'Time'}})}/>
        </View>
    )
}

const Time = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text style={styles.header}>Time</Text>
            <Button title={'To Private'} onPress={() => navigation.navigate('TabList', {screen: 'Settings', params: {screen: 'Private'}})}/>
        </View>
    )
}
const Private = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text style={styles.header}>Private</Text>
            <Button title={'To Logout'} onPress={() => navigation.navigate('TabList', {screen: 'Settings', params: {screen: 'Logout'}})}/>
        </View>
    )
}
const Logout = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text style={styles.header}>Logout</Text>
            <Button title={'To LoginScreen'} onPress={() => navigation.navigate('LoginScreen')}/>
        </View>
    )
}

const SettingsScreen = () => {
const Stack = createNativeStackNavigator<SettingsType>();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Language'} component={Language}/>
            <Stack.Screen name={'Time'} component={Time}/>
            <Stack.Screen name={'Private'} component={Private}/>
            <Stack.Screen name={'Logout'} component={Logout}/>
        </Stack.Navigator>
    );
};

export default SettingsScreen;