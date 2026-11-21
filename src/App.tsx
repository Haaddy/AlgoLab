import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import DashboardPage from './DashboardPage'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}
