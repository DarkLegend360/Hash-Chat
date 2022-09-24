import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { Socket } from '../../services/socket';

import Home from '../Home';
import Login from '../Login';
import Search from '../Search';

export default function (props: any) {
  const { userData } = props;
  const Tab = createBottomTabNavigator();

  useEffect(
    () => () => {
      Socket.getInstance().disconnect();
    },
    []
  );

  return userData ? (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  ) : (
    <Login />
  );
}
