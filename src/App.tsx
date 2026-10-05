import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css'
import Login from './pages/Login'
import ListadoUsuarios from './pages/ListadoUsuarios'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usuarios" element={<ListadoUsuarios />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
