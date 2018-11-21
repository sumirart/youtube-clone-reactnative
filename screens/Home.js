//  IMPORT LIBRARY
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


// IMPORT JSON
import data from '../app/data.json';


// IMPORT COMPONENTS ------------------------
import NavBar from '../components/NavBar';
import VideoItem from '../components/VideoItem'


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar />

                <View style={styles.body}>
                    <FlatList
                        data={data.items}
                        renderItem={
                            (video) => <VideoItem video={video.item} />
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