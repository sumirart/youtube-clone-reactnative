import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default TrendingCategory = () => (
    <View style={trendingStyles.container}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 15 }} >

            <TouchableOpacity style={trendingStyles.itemContainer}>
                <View style={trendingStyles.roundedIcon}>
                    <Icon name="music-note" size={35} color="white" style={{ alignSelf: "center" }} />
                </View>
                <Text style={{ marginTop: 5, fontSize: 12 }}>Music</Text>
            </TouchableOpacity>

            <TouchableOpacity style={trendingStyles.itemContainer}>
                <View style={trendingStyles.roundedIcon}>
                    <Icon name="play-arrow" size={35} color="white" style={{ alignSelf: "center" }} />
                </View>
                <Text style={{ marginTop: 5, fontSize: 12 }}>Live</Text>
            </TouchableOpacity>

            <TouchableOpacity style={trendingStyles.itemContainer}>
                <View style={trendingStyles.roundedIcon}>
                    <Icon name="games" size={35} color="white" style={{ alignSelf: "center" }} />
                </View>
                <Text style={{ marginTop: 5, fontSize: 12 }}>Gaming</Text>
            </TouchableOpacity>

            <TouchableOpacity style={trendingStyles.itemContainer}>
                <View style={trendingStyles.roundedIcon}>
                    <Icon name="receipt" size={35} color="white" style={{ alignSelf: "center" }} />
                </View>
                <Text style={{ marginTop: 5, fontSize: 12 }}>News</Text>
            </TouchableOpacity>

            <TouchableOpacity style={trendingStyles.itemContainer}>
                <View style={trendingStyles.roundedIcon}>
                    <Icon name="local-movies" size={35} color="white" style={{ alignSelf: "center" }} />
                </View>
                <Text style={{ marginTop: 5, fontSize: 12 }}>Movies</Text>
            </TouchableOpacity>

        </ScrollView>
    </View>
)

trendingStyles = StyleSheet.create({
    container: { 
        marginTop: 15,
        marginBottom: 10,
        height: 80,
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
    }
})