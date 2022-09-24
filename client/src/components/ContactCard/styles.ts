import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 70,
    flexDirection: 'row',
    padding: 4,
  },
  displayName: {
    fontSize: 22,
    maxWidth: '70%',
    color: theme.colors.blackDark,
  },
  lastMessage: {
    fontSize: 16,
    maxWidth: '70%',
    color: theme.colors.blackLight,
  },
  messageTime: {
    fontSize: 14,
    color: theme.colors.blueLight,
  },
  leftContainer: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    alignSelf: 'center',
    borderRadius: 30,
  },
  rightContainer: {
    padding: 6,
    flex: 1,
  },
  topContainer: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
