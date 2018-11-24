//  IMPORT LIBRARY
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';


// IMPORT JSON
import data from '../app/data.json';


// IMPORT COMPONENTS ------------------------
import NavBar from '../components/NavBar';
import VideoItem from '../components/VideoItem'


export default class Home extends Component {
constructor(props){
super(props);
this.state = {
    data: data.items
}
}

    render() {
        return (
            <View style={styles.container}>
                <NavBar navigation={this.props.navigation} />

                <View style={styles.body}>
                    <FlatList
                        data={this.state.data}
                        renderItem={
                            (video) => <VideoItem video={video.item} id={video.item.id} />
                        }
                        keyExtractor={
                            (item) => item.id
                        }
                        showsVerticalScrollIndicator={false}
                         />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    // BODY ---------------------
    body: {
        flex: 1
    }
});