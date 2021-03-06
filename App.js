import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen1 from "./Screens/Screen1"
import Screen2 from "./Screens/Screen2"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}