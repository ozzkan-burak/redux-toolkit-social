import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [options, setOptions] = useState();
  const [canSave, setCanSave] = useState(false);

    const titleRef = useRef();
    const contentRef = useRef();
    const userIdRef = useRef();


    const dispatch = useDispatch();

    const users = useSelector((state)=> state.users)

    useEffect(() => {
      const userOptions = users?.map((user, i)=>(
        <option key={`userOption-${user.title}-${i.toString()}`}>{user.title}</option>
      ))
      setOptions(userOptions);
    }, [users])
  
    let title = titleRef?.current?.value;
    let content = contentRef?.current?.value;
    let user = userIdRef?.current?.value;

    

    useEffect(()=> {
      const canSave = Boolean(title) && Boolean(content) && Boolean(user);
      setCanSave(canSave);
      
    }, [title, content, user])

    console.log(canSave);

    const savePost = () => {
      if (title && content && user) {
        dispatch(postAdded(title,content));
        title = "";
        content = "";
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
              ref={titleRef}
            />
            <label htmlFor="postAuthor">Author:</label>
            <select 
              id="postAuthor"
              ref={userIdRef}
              >
                <option>Please select Author</option>
                {options}
            </select>
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              ref={contentRef}
            />
            <button type="button" onClick={savePost}>Save Post</button>
          </form>
        </section>
      )
}

export default AddPostForm