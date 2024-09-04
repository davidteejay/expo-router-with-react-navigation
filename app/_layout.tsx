import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import Tab1 from '@/screens/tabs/Tab1';
import Tab2 from '@/screens/tabs/Tab2';
import Tab3 from '@/screens/tabs/Tab3';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabWrapper = () => (
  <BottomTab.Navigator initialRouteName="Tab1">
          <BottomTab.Screen name="Tab1" component={Tab1}  />
          <BottomTab.Screen name="Tab2" component={Tab2}  />
          <BottomTab.Screen name="Tab3" component={Tab3}  />
        </BottomTab.Navigator> 
)

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent={true}>
        
        <Drawer.Navigator initialRouteName="Drawer">
          <Drawer.Screen name="Drawer" component={BottomTabWrapper} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
