import { View, Text, Button } from 'react-native'

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen2</Text>
      <Button
        title='Ir pra Screen1'
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  )
}

export default Screen2