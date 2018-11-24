import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { withNavigation } from 'react-navigation';

class MessagesTab extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={inboxStyles.connection}>
                            <Text style={inboxStyles.textConnection}>FRIENDS</Text>
                            <Text style={inboxStyles.textConnection}>NEW GROUP</Text>
                        </View>

                        <View style={inboxStyles.friends}>
                            <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={inboxStyles.friendsPhoto} />
                            <View>
                                <Text style={{ fontSize: 15, color: "#202020" }}>[Blocked user]</Text>
                                <Text style={{ marginBottom: 3, color: "#202020" }}>You're now connected!</Text>
                                <Text style={{ fontSize: 12, color: "#777476" }}>2 weeks ago</Text>
                            </View>
                        </View>

                        <View style={inboxStyles.suggested}>

                            <View style={inboxStyles.suggestedText}>
                                <Text style={{ color: "#777476", fontSize: 17 }}>You may know</Text>
                                <Icon name="clear" size={30} color="#686868" />
                            </View>

                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 15 }}>

                                <View style={inboxStyles.suggestedItem}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={inboxStyles.suggestedImg} />

                                    <Text style={{ textAlign: "center", width: 60, color: "#202020" }} numberOfLines={1}>Paul</Text>

                                    <View style={inboxStyles.suggestedBtn}>
                                        <Icon name="person-add" size={18} color="#004ed4" />
                                    </View>
                                </View>

                                <View style={inboxStyles.suggestedItem}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={inboxStyles.suggestedImg} />

                                    <Text style={{ textAlign: "center", width: 60, color: "#202020" }} numberOfLines={1}>Paul</Text>

                                    <View style={inboxStyles.suggestedBtn}>
                                        <Icon name="person-add" size={18} color="#004ed4" />
                                    </View>
                                </View>

                                <View style={inboxStyles.suggestedItem}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={inboxStyles.suggestedImg} />

                                    <Text style={{ textAlign: "center", width: 60, color: "#202020" }} numberOfLines={1}>Paul</Text>

                                    <View style={inboxStyles.suggestedBtn}>
                                        <Icon name="person-add" size={18} color="#004ed4" />
                                    </View>
                                </View>

                                <View style={inboxStyles.suggestedItem}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={inboxStyles.suggestedImg} />

                                    <Text style={{ textAlign: "center", width: 60, color: "#202020" }} numberOfLines={1}>Paul</Text>

                                    <View style={inboxStyles.suggestedBtn}>
                                        <Icon name="person-add" size={18} color="#004ed4" />
                                    </View>
                                </View>

                                <View style={inboxStyles.suggestedItem}>
                                    <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={inboxStyles.suggestedImg} />

                                    <Text style={{ textAlign: "center", width: 60, color: "#202020" }} numberOfLines={1}>Paul</Text>

                                    <View style={inboxStyles.suggestedBtn}>
                                        <Icon name="person-add" size={18} color="#004ed4" />
                                    </View>
                                </View>

                            </ScrollView>
                        </View>

                        <View style={{ paddingHorizontal: 15, marginTop: 15 }}>

                            <View style={{ flexDirection: "row" }}>
                                <AntDesignIcon name="youtube" size={40} color="#FE0000" style={{ marginHorizontal: 10 }} />

                                <View style={{ marginLeft: 15 }}>
                                    <Text style={{ fontSize: 17 }}>Youtube</Text>
                                    <Text style={{ fontSize: 15 }}>Introducing a new way to share</Text>
                                    <Text style={{ fontSize: 12, marginTop: 5, color: "#777476" }}>1 year ago</Text>
                                </View>

                            </View>

                        </View>

                        <View style={{ alignItems: "center", marginBottom: 10, marginTop: 15 }}>
                            <Image source={require('../src/img_no_conversations.png')} style={{ height: 250 }} resizeMode="contain" />
                            <Text style={{ fontSize: 16 }}>Your shared videos will show up here.</Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default withNavigation(MessagesTab);

const inboxStyles = StyleSheet.create({
    // CONNECTION --------------------------------
    connection: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        paddingHorizontal: 15,
        alignItems: "center",
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: '#E6E6E6'
    },

    textConnection: {
        color: "#3377F5",
        fontSize: 15
    },


    // FRIENDS --------------------------------
    friends: {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginTop: 15,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#E6E6E6"
    },

    friendsPhoto: {
        height: 45,
        width: 45,
        borderRadius: 25,
        marginRight: 15
    },

    // SUGGESTED --------------------------------
    suggested: {
        marginTop: 25,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#E6E6E6"
    },

    suggestedText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginBottom: 25
    },

    suggestedItem: {
        marginRight: 15,
        alignItems: "center"
    },

    suggestedImg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginBottom: 15
    },

    suggestedBtn: {
        marginTop: 15,
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eff8ff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#004ed4"
    }
});