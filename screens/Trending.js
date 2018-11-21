//  IMPORT LIBRARY
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


// IMPORT JSON
import data from '../app/data.json';


// IMPORT COMPONENTS ------------------------
import NavBar from '../components/NavBar';
import VideoItem from '../components/VideoItem'
import TrendingCategory from '../components/TrendingCategory'


export default class Trending extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                
                <ScrollView showsVerticalScrollIndicator={false} >

                    <TrendingCategory />

                    <View style={styles.body}>
                        <FlatList
                            data={data.items}
                            renderItem={
                                (video) => <VideoItem video={video.item} dontShowTimes={true} />
                            }
                            keyExtractor={
                                (item) => item.id
                            }
                            showsVerticalScrollIndicator={false}
                        />

                    </View>

                </ScrollView>

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