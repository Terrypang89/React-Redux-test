import { createSlice } from '@reduxjs/toolkit'
// createSlice to make a reducer function that knows how to handle our posts data

//Reducer functions need to have some initial data included 
//so that the Redux store has those values loaded when the app starts up.

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

//Every time we create a new slice, need to add its reducer function to Redux store.

export default postsSlice.reducer