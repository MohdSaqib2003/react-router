import React from 'react'
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (<>
    <div>User Profile</div>
    <Outlet />
    </>
  )
}
export default Profile;