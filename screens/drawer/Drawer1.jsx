import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Text, Button } from 'react-native'

const Tab1 = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button onPress={() => navigation.openDrawer()} title='Open drawer' />
    </SafeAreaView>
  )
}

export default Tab1
