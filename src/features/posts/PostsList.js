
//create a React component that shows the list of posts.
import React from 'react'
import { useSelector } from 'react-redux'

// to render list of posts, need to get data from somewhere
//React components can read data from the Redux store using 
//the useSelector hook from the React-Redux library.

export const PostsList = () => {
    //"selector functions" that you write will be called with 
    //the entire Redux state object as a parameter, 
    //and should return the specific data that this component needs from store.

    //Our initial PostsList component will read state.posts value from Redux store, 
    const posts = useSelector(state => state.posts)
  
    //then loop over the array of posts and show each of them on screen:
    const renderedPosts = posts.map(post => (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    ))
  
    return (
      <section>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    )
}
