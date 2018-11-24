import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { withNavigation } from 'react-navigation';

class Profile extends Component {
  // static navigationOptions = {

  //     headerTitle: "Account",
  //     headerRight: (
  //         <Button
  //             onPress={() => alert('This is a button!')}
  //             title="Info"
  //             color="#000"
  //         />
  //     ),
  // };

  render() {
    const shadowOpt = {
      width: 100,
      height: 100,
      color: "#000",
      border: 2,
      radius: 3,
      opacity: 0.2,
      x: 0,
      y: 3,
      style: { marginVertical: 5 }
    }

    return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ height: 50, flexDirection: "row", paddingLeft: 15, alignItems: "center", elevation: 4, backgroundColor: "white" }}>
        <Icon name="close" size={27} color="#777476" onPress={() => this.props.navigation.goBack()}/>
        <Text style={{ flex: 1, fontSize: 23, fontWeight: "bold", marginLeft: 30, color: "#202020" }}>Account</Text>
      </View>

        <ImageBackground source={require('../src/transparent.png')} style={{ height: 90, width: "100%"}}>
          <View style={{ marginHorizontal: 15 }}>
            <Image source={require('../src/photo.jpg')} style={{ height: 40, width: 40, borderRadius: 25, marginTop: 15 }} />

            <View style={{ flexDirection: "row", marginTop: 5, paddingBottom: 15 }}>
              <Text style={{ color: "white", fontSize: 16, color: "#202020" }}>
                Pratama Agung Sumirat
                </Text>
              <Icon name="arrow-drop-down" size={25} color="white" style={{ marginLeft: 10 }} />
            </View>
          </View>
      </ImageBackground>

      <View style={{ borderBottomWidth: 1, borderColor: "#e0e0e0", marginTop: 15 }}>
        <View style={{ marginHorizontal: 25 }}>
          <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
            <Icon color="#777476" size={25} name="account-box" />
            <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>My channel</Text>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
            <Icon color="#777476" size={25} name="insert-chart" />
            <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>Time watched</Text>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
            <Icon color="#777476" size={25} name="monetization-on" />
            <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>
              Paid memberships
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
            <Icon color="#777476" size={25} name="people" />
            <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>
              Switch Account
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
            <Icon color="#777476" size={25} name="people" />
            <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>
              Incognito
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 25, marginTop: 15 }}>
        <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
          <Icon color="#777476" size={25} name="settings" />
          <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>Settings</Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
          <Icon color="#777476" size={25} name="account-box" />
          <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>
            Terms & privacy policy
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
          <Icon color="#777476" size={25} name="help" />
          <Text style={{ flex: 1, marginLeft: 20, color: "#202020", fontSize: 15 }}>
            Help & feedback
          </Text>
        </View>
      </View>
    </View>
    );
  }
}
export default withNavigation(Profile);