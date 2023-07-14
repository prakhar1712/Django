import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import CreateTaskPage from './pages/CreateTaskPage';
import ViewTaskPage from './pages/ViewTaskPage';
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/createtask' element={<CreateTaskPage/>}></Route>
          <Route path='/viewtask' element={<ViewTaskPage/>}></Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
