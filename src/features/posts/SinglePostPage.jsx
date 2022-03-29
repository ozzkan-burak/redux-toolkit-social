import React from 'react'
import { useSelector } from 'react-redux';

const SinglePostPage = ({match}) => {

  const {postId} = match.params;

  const post = useSelector((state)=>
    state.posts.find(post => post.id == postId)
  )
 
  if(!post) {
    return <section>Post not found</section>
  }

  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p className='post-conten'>
          {post.content}
        </p>
      </article>
    </section>
  )
}

export default SinglePostPage