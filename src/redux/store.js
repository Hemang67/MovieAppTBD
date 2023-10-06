// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can choose another storage engine if needed
import movieReducer from './movieSlice';


const persistConfig = {
    key: 'root',
    storage,
    // Add any other configuration options for redux-persist here
};

const persistedReducer = persistReducer(persistConfig, movieReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
