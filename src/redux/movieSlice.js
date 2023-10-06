// src/redux/bookSlice.js

import { createSlice } from '@reduxjs/toolkit';

const moovieSlice = createSlice({
    name: 'moovies',
    initialState: {
        watchlist: []
    },
    reducers: {
        addToWatchlist: (state, action) => {
            state.watchlist.push(action.payload);
        },
        removeFromWatchlist: (state, action) => {
            state.watchlist = state.watchlist.filter(
                (book) => book.id !== action.payload
            );
        },
    },
});

export const { addToWatchlist, removeFromWatchlist } = moovieSlice.actions;

export default moovieSlice.reducer;
