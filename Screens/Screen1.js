import { View, Text, Button } from 'react-native'

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen1</Text>
      <Button
        title='Ir pra Screen2'
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  )
}

export default Screen1