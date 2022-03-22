import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'Post 1', content: 'Body 1'},
    {id: 2, title: 'Post 2', content: 'Body 2'},
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
});

export default postsSlice.reducer;