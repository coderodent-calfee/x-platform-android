import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './pages/index';
import Guest from './pages/guest';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Mitr-SemiBold": require('./web/assets/fonts/Mitr/Mitr-SemiBold.ttf'),
    "Mitr-Bold": require('./web/assets/fonts/Mitr/Mitr-Bold.ttf'),
    "Mitr-ExtraLight": require('./web/assets/fonts/Mitr/Mitr-ExtraLight.ttf'),
    "Mitr-Light": require('./web/assets/fonts/Mitr/Mitr-Light.ttf'),
    "Mitr-Medium": require('./web/assets/fonts/Mitr/Mitr-Medium.ttf'),
    "Mitr-Regular": require('./web/assets/fonts/Mitr/Mitr-Regular.ttf')
  });

  if (!loaded) {
    return null; // await font
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ title: 'Home' }} />
        <Stack.Screen name="Guest" component={Guest} options={{ title: 'Guest Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
