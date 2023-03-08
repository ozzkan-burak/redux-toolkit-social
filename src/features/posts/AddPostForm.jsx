import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { postAdded } from "./postsSlice";

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();

    const users = useSelector((state)=> state.users)

    const userOptions = users?.map((user)=>(
      <option key={``}>{user.name}</option>
    ))

    const savePost = () => {
      if(title && content) {
        dispatch(postAdded(title,content));
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