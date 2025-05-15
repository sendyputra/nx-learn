import React from 'react';
import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface HelloProps {}

export function Hello(props: HelloProps) {
  return (
    <View>
      <Text>Welcome to hello!</Text>
    </View>
  );
}

export default Hello;
