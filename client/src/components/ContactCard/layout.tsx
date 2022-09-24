import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ContactCard = (props: any) => {
  const { navigation, targetUser } = props;
  const { userName, lastMessage = '', lastMessageTime = '' } = targetUser;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation?.navigate('Chat', { targetUser: targetUser })}
    >
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.displayName}>{userName}</Text>
          <Text style={styles.messageTime}>{lastMessageTime}</Text>
        </View>
        <View style={styles.bottonContainer}>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ContactCard;
