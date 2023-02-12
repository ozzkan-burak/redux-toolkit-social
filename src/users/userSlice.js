import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {id: '0', title: 'Tianne Jenkins'},
  {id: '1', title: 'Kevin Grant'},
  {id: '2', title: 'Madison Price'},
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
