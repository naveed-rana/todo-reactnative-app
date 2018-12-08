import React from "react";
import { View, Text,Button } from "react-native";



export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home </Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Try')}
        />
        </View>
      );
    }
  }