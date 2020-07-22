import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return(
        <View style={styles.loadingView} >
            <ActivityIndicator size={70} color="yellow" />
            <Text style={styles.loadingText}> Loading... </Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    loadingView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    loadingText: {
        color: 'yellow',
        fontSize: 20,
        paddingTop: 50,
        fontWeight: "bold"
    }
})