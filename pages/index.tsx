import React from 'react';
import { View, Button, Text } from 'react-native';
import MyText from '../web/components/Text';
import { useAppNavigation } from "../providers/NavigationProvider";

export default function Index({ navigation }: any) {
  const {navigate} = useAppNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: "black" }}>
      <MyText>use ref</MyText>
      <MyText>Index Page 0_0</MyText>
      <Button title="Go to Guest" onPress={() => navigate('Guest')} />
    </View>
  );
}
