import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

export default SubscriptionsChannel = () => (
    <View style={subsStyles.container}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 15 }} >

            <TouchableOpacity style={subsStyles.itemContainer}>
                <Image source={require('../src/photo.jpg')}
                    style={subsStyles.image} />
                <Text style={subsStyles.text} numberOfLines={1}>Ben Awad</Text>
            </TouchableOpacity>

            <TouchableOpacity style={subsStyles.itemContainer}>
                <Image source={require('../src/photo.jpg')}
                    style={subsStyles.image} />
                <Text style={subsStyles.text} numberOfLines={1}>PewDiePie</Text>
            </TouchableOpacity>

            <TouchableOpacity style={subsStyles.itemContainer}>
                <Image source={require('../src/photo.jpg')}
                    style={subsStyles.image} />
                <Text style={subsStyles.text} numberOfLines={1}>Dota WTF</Text>
            </TouchableOpacity>

            <TouchableOpacity style={subsStyles.itemContainer}>
                <Image source={require('../src/photo.jpg')}
                    style={subsStyles.image} />
                <Text style={subsStyles.text} numberOfLines={1}>Long Channel Name</Text>
            </TouchableOpacity>

            <TouchableOpacity style={subsStyles.itemContainer}>
                <Image source={require('../src/photo.jpg')}
                    style={subsStyles.image} />
                <Text style={subsStyles.text} numberOfLines={1}>Yufid</Text>
            </TouchableOpacity>

        </ScrollView>

        <View style={{ marginHorizontal: 15, justifyContent: "center" }}>
            <Text style={{ color: "#3377F5" }}>ALL</Text>
        </View>
    </View>
)

subsStyles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 10,
        height: 80,
        flexDirection: "row",
        backgroundColor: "#FFF"
    },
    roundedIcon: {
        backgroundColor: "#404040",
        width: 57,
        height: 57,
        borderRadius: 30,
        justifyContent: "center"
    },

    itemContainer: {
        marginRight: 15,
        alignItems: "center"
    },

    image: {
        width: 57,
        height: 57,
        borderRadius: 30
    },

    text: {
        marginTop: 5,
        fontSize: 12,
        width: 57,
        textAlign: "center"
    }
})