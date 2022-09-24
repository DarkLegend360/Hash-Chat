import { selectFriendsList, selectUserData } from '../../selectors';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  friendsList: selectFriendsList,
  userData: selectUserData,
});
