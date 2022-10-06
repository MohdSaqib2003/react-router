import React from "react";
import CustumRoutes from "./Router/custumRoutes";
import { Link } from "react-router-dom";

function App() {
  return (<>
    <h1>Header</h1>
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      <div> <Link to="">Home</Link> </div>
      <div><Link to="about">About</Link></div>
      <div>
        <Link to="contact">Contact</Link>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '25px' }}>
          <Link to="contact/email">Email contact</Link>
          <Link to="contact/phone">Phone Contact</Link>
        </div>
      </div>
      <div>
        <Link to="user">User Profile</Link>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '25px' }}>
          <Link to="user/2">User 2</Link>
          <Link to="user/3">User 3</Link>
        </div>
      </div>
    </nav>
    <hr />
    <CustumRoutes />
  </>
  );
}

export default App;
