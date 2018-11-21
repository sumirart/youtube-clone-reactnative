import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default TabBar = () => (
    <View style={styles.tabBar}>          
        <TouchableOpacity style={styles.tabBarItems}>
        <Icon name="home" size={25} />
            <Text style={[styles.tabBarText, styles.selected]}>Home</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.tabBarItems}>
        <Icon name="whatshot" size={25} />
        <Text style={styles.tabBarText}>Trending</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.tabBarItems}>
        <Icon name="subscriptions" size={25} />
        <Text style={styles.tabBarText}>Subscriptions</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.tabBarItems}>
        <Icon name="mail" size={25} />
        <Text style={styles.tabBarText}>Inbox</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.tabBarItems}>
        <Icon name="folder" size={25} />
        <Text style={styles.tabBarText}>Library</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    // TABBAR ---------------------
    tabBar: {
        borderTopWidth: 1,
        borderColor: "#E5E5E5",
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },

    tabBarItems: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    tabBarText: {
        fontSize: 11,
        color: "#3C3C3C",
        paddingTop: 4
    },

    selected: {
        color: "#ff0000"
    }
})