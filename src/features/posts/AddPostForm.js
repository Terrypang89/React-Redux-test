//create empty form first and add it to the page. 
//Then connect the form to our Redux store 
//so that new posts are added when click the "Save Post" button.
import React, { useState } from 'react'

// get postAdded for dispatch action from reducer
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch() 

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  //add click handler that dispatch postAdded action creator 
  // and pass ub ne wpost obj containing title and 
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
          //postAdded is the reducer function from postsSlice so dispatch push 
        postAdded({ // these id, title and content will be action.payload to add to state
          id: nanoid(),
          title,
          content
        })
      )
      setTitle('')
      setContent('')
    } // after done, settitle and content to empty
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
            Save Post
        </button>
      </form>
    </section>
  )
}