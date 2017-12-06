import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface LimeLabelProps {
  text: string;
}

export default class LimeLabel extends React.Component<LimeLabelProps> {
  render() {
    return <Text style={{ textShadowColor: "black", textShadowRadius: 3, textShadowOffset: { width: 1, height: 1 }, color: "lime", fontSize: 30 }}>{this.props.text}</Text>;
  }
}
