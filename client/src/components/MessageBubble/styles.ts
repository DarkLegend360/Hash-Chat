import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
export default StyleSheet.create({
  container: {
    minHeight: 30,
    maxWidth: '95%',
    backgroundColor: theme.colors.blueLight,
    borderRadius: 30,
    paddingHorizontal: 6,
    marginVertical: 2,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 16,
    margin: 4,
  },
  leftAlign: {
    alignSelf: 'flex-start',
  },
  rightAlign: {
    alignSelf: 'flex-end',
  },
});
