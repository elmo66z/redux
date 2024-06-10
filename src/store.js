import { configureStore, createStore } from '@reduxjs/toolkit';
import Productreducer from './reducers';

const store = configureStore({
  reducer: Productreducer,
});

export default store;