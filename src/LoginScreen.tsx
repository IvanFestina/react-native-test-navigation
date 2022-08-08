import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {useAppNavigation} from "./types/types";


export default function LoginScreen() {

    const navigation = useAppNavigation()

    return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://www.seekpng.com/png/detail/1-11370_watercolour-png-file-watercolor-splash.png'}}
                style={styles.logo}/>

            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.loginText}>Login</Text>

            <TextInput
                placeholder='Email Address'
                placeholderTextColor='#808e9b'
                style={styles.input}
                autoCorrect={true}
                keyboardType='email-address'
                textContentType='emailAddress'
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
            />

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('TabList', {screen: 'Profile', params: {screen: 'ProfileInfo'}})}>
                            <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signUpTextView}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={[styles.signUpText, {color: '#B53471'}]}>
                        {' Sign Up'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: "center"
    },
    welcomeText: {
        fontSize: 30,
        color: '#833471',
        alignSelf: 'center',
    },
    loginText: {
        color: '#833471',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 20,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'rgba(242,239,255,0.84)',
        alignSelf: 'center',

    },
    forgotPasswordText: {
        alignSelf: 'flex-end',
        color: '#B33771',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: '#833471',
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 10,
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center',
    },
    signUpTextView: {
        marginTop: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        color: '#808e9b',
        fontSize: 20,
        fontWeight: '500',
    },
});