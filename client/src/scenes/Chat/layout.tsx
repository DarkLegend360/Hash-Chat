import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import MessageBubble from '../../components/MessageBubble/layout';
import { Socket, SocketType } from '../../services/socket';
import { sendMessage } from '../../services/socket/sendMessage';

const Chat = (props: any) => {
  const {
    route: {
      params: { targetUser },
    },
    userData,
    chatData,
  } = props;

  const [text, setText] = useState<string>('');
  const socket = useRef<SocketType | null>(null);

  useEffect(() => {
    socket.current = Socket.getInstance();
  }, []);

  const handleSendAction = useCallback(() => {
    if (text.length) {
      const payload = {
        senderHandle: userData.accountHandle,
        receiverHandle: targetUser.accountHandle,
        message: text,
      };
      sendMessage(socket.current, payload);
      setText('');
    }
  }, [text, userData, targetUser]);

  const renderFooter = useMemo(
    () => (
      <View style={styles.footer}>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setText(text)}
          value={text}
          onSubmitEditing={handleSendAction}
        ></TextInput>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendAction}>
          <Text>⚡️</Text>
        </TouchableOpacity>
      </View>
    ),
    [styles, text, handleSendAction]
  );

  const renderMessageView = useMemo(
    () => (
      <ScrollView>
        {chatData.map((message: any) => (
          <MessageBubble
            key={message._id}
            messageData={message}
            myAccountHandle={userData.accountHandle}
          />
        ))}
      </ScrollView>
    ),
    []
  );

  return (
    <View style={styles.container}>
      {renderMessageView}
      {renderFooter}
    </View>
  );
};

export default Chat;
