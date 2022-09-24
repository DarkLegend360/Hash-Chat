import { createSelector } from '@reduxjs/toolkit';
import { selectUserData } from '../../selectors';
import { createStructuredSelector } from 'reselect';

const selectSearchDomain = (state: any) => state.search;

export const selectSearchData = createSelector(
  selectSearchDomain,
  (substate) => substate.searchData
);

export default createStructuredSelector({
  userData: selectUserData,
  searchData: selectSearchData,
});
