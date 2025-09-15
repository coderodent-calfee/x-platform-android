import React from 'react';
import { View, Text, Button } from 'react-native';
import MyText from '../web/components/Text';
import { useAppNavigation } from "../web/providers/NavigationProvider.native";

export default function Guest({ navigation }: any) {
  const {navigate} = useAppNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: "black" }}>
      <MyText>Guest Page</MyText>
      <Button title="Go back to Index" onPress={() => navigate('Index')} />
    </View>
  );
}
