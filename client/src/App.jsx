import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Index from './Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1 className='text-center d-block text-danger'>😡Bhai kahn pe request<br/> bhej raha hain</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
