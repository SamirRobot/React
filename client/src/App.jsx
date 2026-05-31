import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import TestPage from './pages/testPage'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage/>} /> 
    </Routes>
    
  )
}

export default App
//// npm run dev // kodlari acmaq ucun 
// npm create  vite@latest
//npm install react-router-dom //ractrooter dom yuklemek ucun 
