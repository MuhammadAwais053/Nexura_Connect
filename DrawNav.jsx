import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Start from './Start';
import Start2 from './Start2';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Start} />
        <Drawer.Screen name="Profile" component={Start2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
