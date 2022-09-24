import { selectUserData } from '../../selectors';
import { createStructuredSelector } from 'reselect';
import { selectChatData } from '../Home/selectors';

export default createStructuredSelector({
  userData: selectUserData,
  chatData: selectChatData,
});
