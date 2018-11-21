import React from "react";
import { View, ActivityIndicator } from "react-native";

export default ActivityIndicator = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="Large" color="#330066" animating />
    </View>
)