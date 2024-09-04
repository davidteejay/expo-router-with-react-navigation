import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Text, Button } from 'react-native'

const App = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button onPress={() => navigation.navigate('App2')} title='Navigate' />
    </SafeAreaView>
  )
}

export default App
