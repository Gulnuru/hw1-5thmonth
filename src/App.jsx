import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Posts from './pages/Posts'
import Layout from './components/Layout'
import Todo from './pages/Todo'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Posts />} />
        <Route path='/todo' element={<Todo />} />
      </Route>
    </Routes>
  )
}

export default App
