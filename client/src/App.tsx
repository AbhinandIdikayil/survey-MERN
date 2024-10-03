import { Route, Routes } from 'react-router-dom'
import './App.css'
import SurveyForm from './pages/SurveyForm'
import Login from './components/admin/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <SurveyForm />
      } />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
