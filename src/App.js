import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/MainHome';
import Login from './pages/user/Login/Login';
import Signup from './pages/user/Signup/Signup';
import Home from './pages/user/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/signup' element={<Signup />} />
        <Route path='/user/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
