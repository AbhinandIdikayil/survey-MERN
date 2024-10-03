import { Route, Routes } from 'react-router-dom'
import './App.css'
import SurveyForm from './pages/SurveyForm'
import Login from './pages/Admin/Login'
import Home from './pages/Admin/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <SurveyForm />
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<Home />} />
    </Routes>
  )
}

export default App
