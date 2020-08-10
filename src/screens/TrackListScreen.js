import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const TrackListScreen = ( {navigation} ) => {
    return <>
       <Text>TrackListScreen</Text> 
       <Button title="go to tack details" onPress={()=>navigation.navigate('TrackDetail')} />
    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;

