import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface CherryLabelProps {
  text: string;
}

export default class CherryLabel extends React.Component<CherryLabelProps> {
  render() {
    return <Text style={{ textShadowColor: "black", textShadowRadius: 3, textShadowOffset: { width: 1, height: 1 }, color: "pink", fontSize: 30 }}>{this.props.text}</Text>;
  }
}
