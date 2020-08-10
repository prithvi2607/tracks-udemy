import React, { useContext } from "react";
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet, View } from "react-native";
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return <SafeAreaView forceInset={{ top:'always' }}>
        <Text style={{fontSize: 48, marginLeft: 15 }}>Account Screen</Text>
        <Spacer>
            <Button title="Sign Out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default AccountScreen;

