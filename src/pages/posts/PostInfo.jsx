/** @format */

import { useLoaderData, useParams } from 'react-router-dom'

const ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/'
const ALL_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments/'

export default function PostInfo() {
  const { id } = useParams()
  const { post, comments } = useLoaderData()

  return (
    <div className='faq'>
      <h3>
        Post #{post.id}: {post.title}
      </h3>
      <p>{post.body}</p>
      {comments.map((comment) => (
        <div
          className='question'
          key={comment.id}
        >
          <p>
            <strong>Name:</strong> {comment.name}
          </p>
          <p>
            <strong>Email:</strong> {comment.email}
          </p>
          <p>
            <strong>Comment:</strong>
            {comment.body}
          </p>
        </div>
      ))}
    </div>
  )
}

export async function postInfoLoader({ params }) {
  const { id } = params
  const [postResponse, commentsResponse] = await Promise.all([
    fetch(ALL_POSTS_URL + id),
    fetch(ALL_COMMENTS_URL + '?postId=' + id),
  ])

  const post = await postResponse.json()
  const comments = await commentsResponse.json()

  return { post, comments }
}
