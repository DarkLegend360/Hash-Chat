import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';
import { Socket, SocketType } from '../../services/socket';
import { fetchAccountHandle } from '../../services/socket/accountHandle';

export default function (props: any) {
  const { setUserData } = props;
  const [userName, setUserName] = useState<string>('');
  const socket = useRef<SocketType | null>(null);

  useEffect(() => {
    socket.current = Socket.getInstance();
    socket.current.once('accountHandleSuccess', (userDetails) => {
      setUserData(userDetails);
    });
  }, []);

  const handleLogin = useCallback(async () => {
    await fetchAccountHandle(socket.current, userName);
  }, [userName]);

  return (
    <View style={styles.container}>
      <Text>Welcome To HashChat</Text>
      <Text>Provide an userName to continue</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => setUserName(text)}
        value={userName}
        autoCorrect={false}
      />
      <Button title="Enter" onPress={handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}
