import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId }= useParams();
  console.log("ID : ", userId);
  return (
    <div>Complete Details of User : {userId} </div>
  )
}

export default UserDetails;