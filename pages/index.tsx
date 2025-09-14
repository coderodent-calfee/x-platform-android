import React from 'react';
import { View, Button, Text } from 'react-native';
import MyText from '../web/components/Text';

export default function Index({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: "black" }}>
      <MyText>Index Page 0_0</MyText>
      <Button title="Go to Guest" onPress={() => navigation.navigate('Guest')} />
    </View>
  );
}
