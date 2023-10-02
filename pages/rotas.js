import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import FPS from './fps';
import Roguelike from './roguelike';
import Luta from './luta';
import Sandbox from './sandbox';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, title: 'Homepage' }}
      />
      <Stack.Screen
        name="Sandbox"
        component={Sandbox}
        options={{ headerShown: false, title: 'Sandbox' }}
      />
      <Stack.Screen
        name="Roguelike"
        component={Roguelike}
        options={{ headerShown: false, title: 'Roguelike' }}
      />
      <Stack.Screen
        name="Luta"
        component={Luta}
        options={{ headerShown: false, title: 'Luta' }}
      />
      <Stack.Screen
        name="FPS"
        component={FPS}
        options={{ headerShown: false, title: 'FPS' }}
      />
    </Stack.Navigator>
  );
}
