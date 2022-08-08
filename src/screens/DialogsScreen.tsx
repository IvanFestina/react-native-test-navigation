import React from 'react';
import {Button, View, Text} from "react-native";
import {DialogsType, ProfileType, useAppNavigation} from "../types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {styles} from "./ProfileScreen";

const Messages = () => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text style={styles.header}>Messages</Text>
            <Button title={'To Groups'} onPress={() => navigation.navigate('TabList', {screen: 'Dialogs', params: {screen: 'Groups'}})}/>
        </View>
    )
}

const Groups = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text style={styles.header}>Groups</Text>
            <Button title={'To ForSave'} onPress={() => navigation.navigate('TabList', {screen: 'Dialogs', params: {screen: 'ForSave'}})}/>
        </View>
    )
}
const ForSave = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text style={styles.header}>ForSave</Text>
            <Button title={'To Settings: Language'} onPress={() => navigation.navigate('TabList', {screen: 'Settings', params: {screen: 'Language'}})}/>
        </View>
    )
}

const DialogsScreen = () => {
const Stack = createNativeStackNavigator<DialogsType>();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Messages'} component={Messages}/>
            <Stack.Screen name={'Groups'} component={Groups}/>
            <Stack.Screen name={'ForSave'} component={ForSave}/>
        </Stack.Navigator>
    );
};

export default DialogsScreen;

