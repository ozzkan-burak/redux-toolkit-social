import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const SinglePostPage = () => {

  let {id} = useParams();

  console.log(id)

  const post = useSelector((state)=>
    state.posts.find(post => post.id === Number(id))
  )
 
  if(!post) {
    return <section>Post not found</section>
  }
  
  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p className='post-content'>
          {post.content}
        </p>
        <Link to={`/edit-post/${id}`}>Edit Post</Link>
      </article>
    </section>
  )
}

export default SinglePostPage