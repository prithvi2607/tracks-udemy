import React, { useContext } from "react";
import { StyleSheet, ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthFom';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
   const { state, signup, clearErrorMessage } = useContext(AuthContext);

   return (
      <KeyboardAvoidingView>
         <ScrollView style={styles.container}>
            <View >
               <NavigationEvents onWillFocus={clearErrorMessage} />
               <AuthForm headerText="Sign Up for Tracker" errorMessage={state.errorMessage} submitButtonText="Sign Up" onSubmit={({ email, password }) => signup({ email, password })} />
               <NavLink text="Already have an account? Sign in instead." routeName="Signin" />
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

SignupScreen.navigationOptions = () => {
   return {
      header: () => false,
   };
};

const styles = StyleSheet.create({
   container: {
      paddingVertical: 150
   }
});

export default SignupScreen;

