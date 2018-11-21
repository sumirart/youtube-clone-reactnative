//  IMPORT LIBRARY
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


// IMPORT JSON
import data from '../app/data.json';


// IMPORT COMPONENTS ------------------------
import NavBar from '../components/NavBar';
import VideoItem from '../components/VideoItem'
import SubscriptionsChannel from '../components/SubscriptionsChannel'


export default class Subscriptions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <SubscriptionsChannel />

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