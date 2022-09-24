import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './redux';
import searchReducer from './scenes/Search/redux';
import chatReducer from './scenes/Home/redux';
export default configureStore({
  reducer: {
    global: globalReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});
