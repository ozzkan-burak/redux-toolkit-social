import { useState } from "react";
import { useDispatch } from "react-redux";

// action
import { postAdded } from "../store/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const savePost = () => {
      if(title && content) {
        dispatch(postAdded({
          id: nanoid(),
          title,
          content,
        }));
        
        setTitle('');
        setContent('');
      }
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
              onChange={(e)=> setTitle(prevState => prevState = e.target.value)}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={(e)=> setContent(prevState => prevState = e.target.value)}
            />
            <button type="button" onClick={savePost}>Save Post</button>
          </form>
        </section>
      )
}

export default AddPostForm