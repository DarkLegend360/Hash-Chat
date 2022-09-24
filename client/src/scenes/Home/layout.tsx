import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useRef } from 'react';
import { Socket, SocketType } from '../../services/socket';
import { fetchMessages } from '../../services/socket/fetchMessages';
import Chat from '../Chat';
import ChatHistory from '../ChatHistory';
const Home = (props: any) => {
  const { userData, setChatData } = props;
  const Stack = createNativeStackNavigator();

  const socket = useRef<SocketType | null>(null);

  useEffect(() => {
    socket.current = Socket.getInstance();
    if (socket.current) {
      setInterval(
        () => fetchMessages(socket.current, userData.accountHandle),
        1000
      );

      socket.current.on('fetchMessagesSuccess', (messages) => {
        setChatData(messages);
      });
    }
  }, [userData]);

  return (
    <Stack.Navigator initialRouteName="ChatHome">
      <Stack.Screen
        name="ChatHistory"
        options={{ headerShown: false }}
        component={ChatHistory}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }: any) => ({
          title: route?.params?.targetUser?.userName || 'User',
        })}
      />
    </Stack.Navigator>
  );
};

export default Home;
