import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';
import { selectUserData } from '../../selectors';

const selectChatDomain = (state: any) => state.chat;

export const selectChatData = createSelector(
  selectChatDomain,
  (substate) => substate.chatData
);

export default createStructuredSelector({
  chatData: selectChatData,
  userData: selectUserData,
});
