import React from 'react';
import { View, Button, Text } from 'react-native';
import MyText from '../web/components/Text';
import { useAppNavigation } from "../web/providers/NavigationProvider";

export default function Index({ navigation }: any) {
  const {navigate, push} = useAppNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: "black" }}>
      <MyText>Index Page 0_0!</MyText>
      <MyText>Android Home</MyText>
      <Button title="Go to Guest" onPress={() => push("/guest")} />
    </View>
  );
}
