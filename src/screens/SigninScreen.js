import React, { useContext } from "react";
import { Text, StyleSheet, ScrollView, KeyboardAvoidingView, View } from "react-native";
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthFom';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.container}>
                <View>
                    <NavigationEvents onWillFocus={clearErrorMessage} />
                    <AuthForm headerText="Sign In into your account" errorMessage={state.errorMessage} submitButtonText="Sign In" onSubmit={signin} />
                    <NavLink text="Dont have an account? Sign up instead." routeName="Signup" />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 150
    }
});

export default SigninScreen;

