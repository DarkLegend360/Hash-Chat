import { Text, View } from 'react-native';
import styles from './styles';

const MessageBubble = (props: any) => {
  const { messageData, myAccountHandle } = props;
  const { senderHandle, message } = messageData;

  return (
    <View
      style={[
        styles.container,
        myAccountHandle === senderHandle ? styles.rightAlign : styles.leftAlign,
      ]}
    >
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default MessageBubble;
