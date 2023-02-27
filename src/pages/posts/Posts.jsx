/** @format */

import { useLoaderData, Link } from 'react-router-dom'

const ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function Posts() {
  const posts = useLoaderData(postsLoader)
  return (
    <div className='careers'>
      {posts.map((post) => (
        <Link
          to={post.id.toString()}
          key={post.id}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Link>
      ))}
    </div>
  )
}

// Loader function
export const postsLoader = async () => {
  const response = fetch(ALL_POSTS_URL)
  return (await response).json()
}
