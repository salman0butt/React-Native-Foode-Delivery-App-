import {configureStore} from '@reduxjs/toolkit';
import tabReducer from './tab/tabSlice';
export default configureStore({
  reducer: {
    tab: tabReducer,
  },
});
