import { useCallback, useEffect, useRef, useState } from 'react';
import { UserData } from '../../types';

import { Socket, SocketType } from '../../services/socket';
import { searchByUserName } from '../../services/socket/searchByUserName';
import { ScrollView, TextInput, View } from 'react-native';
import SearchCard from '../../components/SearchCard/layout';
import styles from './styles';
import { addToFriendsList } from '../../services/socket/addFriend';
import { fetchFriendsList } from '../../services/socket/fetchFriendsList';

export default function (props: any) {
  const { searchData, setSearchData, userData } = props;
  const [userName, setUserName] = useState<string>('');

  const socket = useRef<SocketType | null>(null);

  useEffect(() => {
    if (socket.current) {
      searchByUserName(socket.current, userName);
      if (userName == '') {
        setSearchData([]);
      } else {
        socket.current.once('searchResult', (searchResult) => {
          setSearchData(searchResult || []);
          fetchFriendsList(socket.current, userData.accountHandle);
        });
      }
    }
  }, [userName]);

  useEffect(() => {
    socket.current = Socket.getInstance();
  }, []);

  const handleClick = useCallback(
    (targetAccountHandle: string) => {
      addToFriendsList(
        socket.current,
        userData.accountHandle,
        targetAccountHandle
      );
      setSearchData(
        searchData.filter(
          (data: UserData) => data.accountHandle !== targetAccountHandle
        )
      );
    },
    [searchData]
  );

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setUserName(text)}
        value={userName}
        style={styles.inputField}
      />
      <ScrollView>
        {searchData.map((user: UserData) => (
          <SearchCard
            key={user.accountHandle}
            user={user}
            onClick={handleClick}
          />
        ))}
      </ScrollView>
    </View>
  );
}
