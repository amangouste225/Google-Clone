import React from 'react'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

function App() {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Routes>
            <Route path='/search' element={<Search />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}

export default App
