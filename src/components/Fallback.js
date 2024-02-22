import { StyleSheet, Text, View, Image } from "react-native";
import React from "react"; 

export const Fallback = () => {
    return (
        <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/pngwing.com.png")} />
            <Text>Start Adding Your Task</Text>
        </View>
    )
}

