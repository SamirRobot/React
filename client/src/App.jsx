import React from 'react' 
import HomePage from './pages/homePage.jsx'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      
    </Routes>
  )
}

export default App
//// npm run dev // kodlari acmaq ucun 
// npm create  vite@latest
//npm install react-router-dom //ractrooter dom yuklemek ucun 
