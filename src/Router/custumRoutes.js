import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact/contact';
import NotFound from '../components/NotFound';
import Email from '../components/contact/email';
import Phone from '../components/contact/phone';
import Profile from '../components/User/profile';
import UserDetails from '../components/User/userDetails';

const CustumRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />}>
                    <Route path='email' element={<Email />} />
                    <Route path='phone' element={<Phone />} />
                </Route>
                <Route path='user' element={<Profile />}>
                    <Route path=':userId' element={<UserDetails />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}
export default CustumRoutes;