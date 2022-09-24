import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from './types';
interface InitialState {
  userData: UserData | null;
  friendsList: any[];
}

const initialState: InitialState = {
  userData: null,
  friendsList: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserData>) {
      state.userData = action.payload;
    },
    setFriendsList(state, action: PayloadAction<any>) {
      state.friendsList = action.payload;
    },
  },
});

export const { setFriendsList, setUserData } = globalSlice.actions;
export default globalSlice.reducer;
