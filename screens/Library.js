import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

// IMPORT COMPONENT
import Navbar from '../components/NavBar';

export default class Library extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF"}}>

                <Navbar />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 15 }}>
                    <View style={{ borderColor: "#E6E6E6", borderBottomWidth: 1 }}>
                        <Text style={{ color: "#202020", fontSize: 15, paddingLeft: 15 }}>Recent</Text>

                        <ScrollView contentContainerStyle={{ paddingLeft: 15, marginVertical: 15 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity style={{ marginRight: 15, width: 145 }} onPress={ () => this.props.navigation.navigate('TestScreen') }>
                                <Image source={require('../src/photo.jpg')} style={{ height: 75, width: 145 }} />

                                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, justifyContent: "space-between" }}>
                                    <View style={{ width: 120 }}>
                                        <Text numberOfLines={2} style={{ color: "#202020", fontSize: 14, width: 120 }}>PAGI - PAGI UDA NGOMEL</Text>
                                        <Text style={{ color: "#777476", fontSize: 12, marginTop: 3 }}>Arif Muhammad</Text>
                                    </View>

                                    <Icon name="more-vert" size={19} color="#777476" style={{ marginLeft: 15, marginTop: 5 }} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginRight: 15, width: 145 }}>
                                <Image source={require('../src/photo.jpg')} style={{ height: 75, width: 145 }} />

                                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, justifyContent: "space-between" }}>
                                    <View style={{ width: 120 }}>
                                        <Text numberOfLines={2} style={{ color: "#202020", fontSize: 14, width: 120 }}>We Stole Tampons from the Cashier-less Amazon Go Store</Text>
                                        <Text style={{ color: "#777476", fontSize: 12, marginTop: 3 }}>Linus Tech Tips</Text>
                                    </View>

                                    <Icon name="more-vert" size={19} color="#777476" style={{ marginLeft: 15, marginTop: 5 }} />
                                </View>
                            </View>
                            <View style={{ marginRight: 15, width: 145 }}>
                                <Image source={require('../src/photo.jpg')} style={{ height: 75, width: 145 }} />

                                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, justifyContent: "space-between" }}>
                                    <View style={{ width: 120 }}>
                                        <Text numberOfLines={2} style={{ color: "#202020", fontSize: 14, width: 120 }}>PAGI - PAGI UDA NGOMEL</Text>
                                        <Text style={{ color: "#777476", fontSize: 12, marginTop: 3 }}>Arif Muhammad</Text>
                                    </View>

                                    <Icon name="more-vert" size={19} color="#777476" style={{ marginLeft: 15, marginTop: 5 }} />
                                </View>
                            </View>

                        </ScrollView>
                    </View>

                    <View style={{ marginRight: 15, borderBottomWidth: 1, borderColor: "#E6E6E6", marginBottom: 15 }}>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10, marginLeft: 15 }}>
                            <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                <Icon name="history" size={25} color="#777476" />
                            </View>
                            
                            <Text style={{ fontSize: 16, color: "#202020", flex: 1 }}>History</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10, marginLeft: 15 }}>
                            <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                <Icon name="cloud-download" size={25} color="#777476" />
                            </View>
                            
                            <View style={{ flex: 1}}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Downloads</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>0 videos</Text>
                            </View>

                            <Icon name="check-circle" size={23} color="#3377F5" />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10, marginLeft: 15 }}>
                            <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                <Icon name="video-library" size={25} color="#777476" />
                            </View>
                            
                            <Text style={{ fontSize: 16, color: "#202020", flex: 1 }}>My videos</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10, marginLeft: 15 }}>
                            <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                                <Icon name="watch-later" size={25} color="#777476" />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Watch later</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>6 unwatched videos</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ marginHorizontal: 15 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#202020", fontSize: 14 }}>Playlist (Recently added)</Text>
                            <Icon name="arrow-drop-down" size={20} color="#777476" />
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center" }}>
                                <Icon name="thumb-up" size={25} color="#777476" style={{ marginHorizontal: 5 }} />
                            </View>

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Liked videos</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>459 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>English</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>39 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Learn React Native</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>117 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Learn in One Video</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>Derek Banas · 57 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>React Native Layout Series</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>Unsure Programmer · 28 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Fullstack Airbnb Clone</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>Ben Awad · 84 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Inkscape Beginner Tutorials</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>Logos By Nick · 55 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>The British accent! You know you want it!</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>Learn English with Papa Teach Me · 18 videos</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40 }} />

                            <View style={{ flex: 1, marginLeft: 15, marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: "#202020" }}>Learn Javascript</Text>
                                <Text style={{ fontSize: 14, color: "#777476" }}>61 videos</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});