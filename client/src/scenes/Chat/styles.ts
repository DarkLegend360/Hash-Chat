import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.greenLight,
    flex: 1,
  },
  inputField: {
    height: 40,
    backgroundColor: theme.colors.blueLight,
    borderRadius: 20,
    width: '85%',
    marginLeft: 8,
    padding: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: theme.colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
});
