import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.greenLight,
    flex: 1,
  },
  inputField: {
    height: 40,
    backgroundColor: theme.colors.greyDark,
    borderRadius: 10,
    margin: 4,
    padding: 8,
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
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
