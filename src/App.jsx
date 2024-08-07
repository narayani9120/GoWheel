import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import CarList from './Components/CarList'

function App() {
  

  return (
    <>
    <Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/Header" element={<Header/>}></Route>
 <Route path="/List" element={<CarList/>}></Route>
    </Routes>
  
    </>
    
  )
}

export default App
