import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

class Search extends Component {
  static navigationOptions = {
    title: "Search"
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="grey" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search YouTube"
          style={{
            flex: 1,
            marginLeft: 15,
            backgroundColor: "#f6f5f7",
            marginRight: 10
          }}
          autoFocus={true}
        />
      </View>
    );
  }
}
export default withNavigation(Search);

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 15,
    alignItems: "center",
    elevation: 3
  }
});
