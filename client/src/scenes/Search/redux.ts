import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../types';
interface InitialState {
  searchData: Array<UserData>;
}

const initialState: InitialState = {
  searchData: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchData(state, action: PayloadAction<Array<UserData>>) {
      state.searchData = action.payload;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;
