/** @format */

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Root from './layouts/Root'
import Home from './pages/Home'
import PostsLayout from './layouts/PostsLayout'
import Posts, { postsLoader } from './pages/posts/Posts'
import PostInfo, { postInfoLoader } from './pages/posts/PostInfo'
import Comments from './pages/posts/Comments'
import PostError from './pages/posts/PostError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='posts'
        element={<PostsLayout />}
        loader={postsLoader}
        errorElement={<PostError />}
      >
        <Route
          index
          element={<Posts />}
          loader={postsLoader}
        />
        <Route
          path=':id'
          element={<PostInfo />}
          loader={postInfoLoader}
        />
      </Route>
      <Route
        path='comments'
        element={<Comments />}
        loader={postInfoLoader}
      />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
