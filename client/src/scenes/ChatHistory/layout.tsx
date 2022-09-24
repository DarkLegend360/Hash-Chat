import { View } from 'react-native';
import ContactCard from '../../components/ContactCard/layout';
import { useEffect, useRef } from 'react';
import { Socket, SocketType } from '../../services/socket';
import { fetchFriendsList } from '../../services/socket/fetchFriendsList';
const ChatHistory = (props: any) => {
  const { navigation, setFriendsList, friendsList, userData } = props;
  const socket = useRef<SocketType | null>(null);

  useEffect(() => {
    socket.current = Socket.getInstance();
    if (userData) {
      fetchFriendsList(socket.current, userData.accountHandle);
      socket.current.on('friendsList', (list) => {
        console.log(list);
        setFriendsList(list || []);
      });
    }
  }, []);

  return (
    <View>
      {friendsList?.map((targetUser: any) => (
        <ContactCard
          key={targetUser.accountHandle}
          targetUser={targetUser}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export default ChatHistory;
