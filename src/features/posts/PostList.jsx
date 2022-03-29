import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const PostList = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id} className="post-excerpt">
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">Read more</Link>
      </article>
    )
  })

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostList
