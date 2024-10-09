import { Route, Routes } from 'react-router-dom'
import './App.css'
import SurveyForm from './pages/SurveyForm'
import Login from './pages/Admin/Login'
import Home from './pages/Admin/Home'
import ProtectedRoute from './components/admin/ProtectedRoute'
import LoginProtectedRoute from './components/admin/LoginProtectedRoute'
import SuccessPage from './pages/user/SuccessPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <SurveyForm />
      } />
      <Route path='/success' element={<SuccessPage />} />
      <Route path='/login' element={
        <LoginProtectedRoute>
          <Login />
        </LoginProtectedRoute>
      } />
      <Route path='/admin' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App
