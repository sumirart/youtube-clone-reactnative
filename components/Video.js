import React, { Component } from "react";
import { 
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

class Video extends Component {
    render() {
        const data = this.props.navigation.state.params.data;

        return <View style={{ backgroundColor: "white" }}>
            <Image source={{ uri: data.snippet.thumbnails.standard.url }} style={{ height: 200 }} />

            <ScrollView style={{ marginTop: 15, marginHorizontal: 15 }} showsVerticalScrollIndicator={false}>
              <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <Text
                  style={{ fontSize: 18, color: "#202020", flex: 1 }}
                >
                  {data.snippet.title}
                </Text>
                <Icon name="arrow-drop-up" size={27} color="black" style={{ marginLeft: 15 }} />
              </View>

              <Text style={{ marginTop: 5 }}>
                {data.statistics.viewCount} views
              </Text>

              <View style={{ borderWidth: 1, borderBottomColor: "gray"}}>
                <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 15 }}>

                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Icon name="thumbs-up" size={25} color="#777476" />
                        <Text style={{ marginTop: 5 }}>{data.statistics.likeCount}</Text>
                    </View>

                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Icon name="thumbs-down" size={25} color="#777476" />
                        <Text style={{ marginTop: 5 }}>{data.statistics.dislikeCount}</Text>
                    </View>

                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Icon name="thumbs-up" size={25} color="#777476" />
                        <Text style={{ marginTop: 5 }}>Share</Text>
                    </View>

                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Icon name="thumbs-up" size={25} color="#777476" />
                        <Text style={{ marginTop: 5 }}>Download</Text>
                    </View>

                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Icon name="thumbs-up" size={25} color="#777476" />
                        <Text style={{ marginTop: 5 }}>Save</Text>
                    </View>

                </View>
              </View>

              <Text>Channel: {data.snippet.channelTitle}</Text>
              <Text>Published on: {data.snippet.publishedAt} </Text>
              <Text>Dislike: {data.statistics.dislikeCount}</Text>
              <Text>Comment: {data.statistics.commentCount}</Text>
              <Text>Description: {data.snippet.description}</Text>
            </ScrollView>
          </View>;
    }
}
export default Video;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});