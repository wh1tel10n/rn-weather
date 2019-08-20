import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Loading () {
    return (
      <View style={styles.container}>
        <Text styles={styles.text}> Getting the new weather </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 30,
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});
