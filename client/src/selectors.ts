import { createSelector } from '@reduxjs/toolkit';

const selectGlobalDomain = (state: any) => state.global;

export const selectUserData = createSelector(
  selectGlobalDomain,
  (substate) => substate.userData
);

export const selectFriendsList = createSelector(
  selectGlobalDomain,
  (substate) => substate.friendsList
);
