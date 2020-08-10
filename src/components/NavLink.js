import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <>
            <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate(routeName)} >
                    <Text style={styles.link}>{text}</Text>
                </TouchableOpacity>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'purple',
        fontSize: 18
    }
});

export default withNavigation(NavLink);