/** @format */

import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Root() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Posts.my</h1>

          <NavLink
            exact
            to='/'
            activeClassName='active'
          >
            Home
          </NavLink>

          <NavLink
            to='/posts'
            activeClassName='active'
          >
            Posts
          </NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
