import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends Component {
    render(){
        const video = this.props.video;
        const dontShowTimes = this.props.dontShowTimes;

        return(
            <View style={{ marginBottom: 20, backgroundColor: "#FFF" }}>
                <Image source={{ uri: video.snippet.thumbnails.standard.url }} style={{ height: 200 }} />

                <View style={styles.container}>

                    <View style={styles.videoDesc}>
                        <Image source={{ uri: "https://randomuser.me/api/portraits/men/30.jpg" }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                        
                        <View style={styles.detail}>
                            <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                            {
                                dontShowTimes ?
                                (
                                    <Text style={styles.stats}>
                                        {video.snippet.channelTitle + " · " + abbreviateNumber(video.statistics.viewCount) + " views "}
                                    </Text>
                                ) 
                                : 
                                (
                                    <Text style={styles.stats}>
                                        {video.snippet.channelTitle + " · " + abbreviateNumber(video.statistics.viewCount) + " views " + " · "} 5 months ago
                                    </Text>
                                 )
                            }
                        </View>

                        <TouchableOpacity>
                            <Icon name="more-vert" size={20} color="#999999" style={{paddingTop: 10}} />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },

    videoDesc: {
        flexDirection: "row",
        marginTop: 15
    },

    detail: {
        marginHorizontal: 15,
        flex: 1
    },

    videoTitle: {
        fontSize: 15,
        color: "#202020",
    },

    stats: {
        fontSize: 14,
        marginTop: 3
    }
})

let SI_SYMBOL = ["", "K", "M", "B", "T", "P", "E"];
function abbreviateNumber(number) {

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}