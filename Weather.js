import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather ({ temp }) {
    return (
        <View style={StyleSheet.container}>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});