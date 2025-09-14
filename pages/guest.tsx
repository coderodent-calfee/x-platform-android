import React from 'react';
import { View, Text, Button } from 'react-native';
import MyText from '../web/components/Text';

export default function Guest({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: "black" }}>
      <MyText>Guest Page</MyText>
      <Button title="Go back to Index" onPress={() => navigation.navigate('Index')} />
    </View>
  );
}
