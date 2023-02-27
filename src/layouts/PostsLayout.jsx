/** @format */

import { Outlet } from "react-router-dom";

export default function PostsLayout() {
  return (
    <div className='careers-layout'>
      <h2>Posts</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

      <Outlet />
    </div>
  )
}
