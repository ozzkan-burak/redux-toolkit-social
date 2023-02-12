import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
// actions
import {postUpdated} from './postsSlice'

const EditPostForm = () => {
  
  const { id } = useParams();
  
  const post = useSelector(state => state.posts.find(post => post.id === Number(id)));
  const { title, setTitle } = useState(post.title);
  const {content, setContent} = useState(post.content);

  console.log(post.content)

  const dispatch = useDispatch();
  const history = useHistory();


  const savePost = () => {
    if(title && content){
      dispatch(postUpdated({id, title, content}));
      history.push(`/posts/${id}`);  
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Whats your mind?"
          value={title}
          onChange={(e) => setTitle(prevState => prevState = e.target.value)}
        />
        <label htmlFor="postTitle">Post Content</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(prevState => prevState = e.target.value)}
        />
        <button type="button" onClick={savePost}>
          Update Post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
