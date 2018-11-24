import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';


class NavBar extends Component{
    render(){
        return(
            <View style={styles.navbar}>
                <Image source={require("../src/logo.png")} style={{ width: 90, height: 20 }} />

                <View style={styles.rightNav}>
                    <TouchableOpacity>
                        <Icon style={styles.navItems} name="videocam" size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                        <Icon style={styles.navItems} name="search" size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                        <Image source={require('../src/photo.jpg')} style={styles.photo} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(NavBar);

const styles = StyleSheet.create({
    // NAVBAR ---------------------
    navbar: {
        height: 55,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    rightNav: {
        flexDirection: "row"
    },

    navItems: {
        marginLeft: 25
    },

    photo: {
        height: 25,
        width: 25,
        borderRadius: 25,
        marginLeft: 25,
    }
})