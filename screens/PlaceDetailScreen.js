import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = (props) => {
  return (
    <View>
      <Text>Places List Screen!</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigationOptions.getParam("placeTitle"),
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
