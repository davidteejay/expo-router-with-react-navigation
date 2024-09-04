import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Text, Button } from 'react-native'

const App2 = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button onPress={() => navigation.goBack()} title='Back' />
    </SafeAreaView>
  )
}

export default App2
