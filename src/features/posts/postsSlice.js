import { createSlice } from '@reduxjs/toolkit'
// createSlice to make a reducer function that knows how to handle our posts data

//Reducer functions need to have some initial data included 
//so that the Redux store has those values loaded when the app starts up.

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

//posts slice is responsible for handling all updates to the posts data so use reducers 
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
        state.push(action.payload) // action.payload push to state array
    }
    //Inside of reducers, add a function named postAdded, 
    //which will receive two arguments: 
    //-> the current state value, and 
    //-> the action object that was dispatched. 

    //Since the posts slice only knows about the data it's responsible for, 
    //the state argument == the array of posts by itself, 
    //and not the entire Redux state object.

    // When we write the postAdded reducer function, createSlice will 
    // automatically generate an "action creator" function with the same name
  }
})

//The action object will have our new post entry as the action.payload field, 
//and we'll put that new post object into the state array.

export const { postAdded } = postsSlice.actions
// then export that action creator and use it in our UI components to 
// dispatch the action when the user clicks "Save Post".

//Every time we create a new slice, need to add its reducer function to Redux store.

export default postsSlice.reducer