import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/home'
import Auth from './components/Pages/auth/Auth'
import Questions from './components/Pages/questions/Questions'
import AskQuestion from './components/Pages/askQuestion/AskQuestion'
import DisplayQuestion from './components/Pages/questions/DisplayQuestion'
import Tags from './components/Pages/tags/Tags'
import Users from './components/Pages/users/Users'
import UserProfile from './components/Pages/userProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />

    </Routes>
  )
}

export default AllRoutes