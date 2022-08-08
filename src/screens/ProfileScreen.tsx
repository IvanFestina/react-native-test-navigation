import React from 'react';
import {Button, View, Text, StyleSheet} from "react-native";
import {ProfileType, useAppNavigation} from "../types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const ProfileInfo = () => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text style={styles.header}>ProfileInfo</Text>
            <Button title={'To ProfilePhoto'} onPress={() => navigation.navigate('TabList', {screen: 'Profile', params: {screen: 'ProfilePhoto'}})}/>
        </View>
    )
}

const ProfilePhoto = () => {
    const navigation = useAppNavigation()

    return (
        <View>
            <Text style={styles.header}>ProfilePhoto</Text>
            <Button title={'To Dialogs: Messages'} onPress={() => navigation.navigate('TabList', {screen: 'Dialogs', params: {screen: 'Messages'}})}/>
        </View>
    )
}

const ProfileScreen = () => {
const Stack = createNativeStackNavigator<ProfileType>();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'ProfileInfo'} component={ProfileInfo}/>
            <Stack.Screen name={'ProfilePhoto'} component={ProfilePhoto}/>
        </Stack.Navigator>
    );
};

export default ProfileScreen;


export const styles = StyleSheet.create({
header: {
        fontSize: 20,
        alignSelf: 'center',
        padding: 40,
    },
})