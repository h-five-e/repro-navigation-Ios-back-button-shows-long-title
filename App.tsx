import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="screenA"
          component={ScreenA}
          options={{headerTitle: 'screen a'}}
        />
        <Stack.Screen
          name="screenB"
          component={ScreenB}
          options={{headerTitle: 'screen b has a really, really long title'}}
        />
        <Stack.Screen
          name="screenC"
          component={ScreenC}
          options={{headerTitle: 'screen c'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ScreenA = ({navigation}) => (
  <View style={{flex: 1}}>
    <Text>Screen A</Text>
    <Button
      onPress={() => navigation.navigate('screenB')}
      title="Go to screen B"
    />
  </View>
);

const ScreenB = ({navigation}) => (
  <View style={{flex: 1}}>
    <Text>Screen B</Text>
    <Button
      onPress={() => navigation.navigate('screenC')}
      title="Go to screen C"
    />
  </View>
);

const ScreenC = () => (
  <View style={{flex: 1}}>
    <Text>Screen C</Text>
  </View>
);
