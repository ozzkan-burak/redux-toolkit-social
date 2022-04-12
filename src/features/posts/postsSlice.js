import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'Post 1', content: 'Body 1'},
    {id: 2, title: 'Post 2', content: 'Body 2'},
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload);
        },
        postUpdated: (state, action) => {
            const {id, title, content} = action.payload;
            const existingPost = state.find(post => post.id === id);
            if(existingPost){
                existingPost.title = title;
                existingPost.content = content;
            }
        }
    },
});

// action creaters

export const {postAdded, postUpdated} = postsSlice.actions;

export default postsSlice.reducer;