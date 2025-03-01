import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom";
import './index.css'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Project from './pages/Project'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from "./components/Header";

function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
