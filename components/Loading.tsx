import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { COLORS } from '../constants';

interface LoadingProps {

}

const Loading: React.FC<LoadingProps> = ({ }) => {
  return (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={COLORS.primary} />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loading