import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/MainHome';
import Login from './pages/user/login/login';
import Signup from './pages/user/signup/signup';
import Home from './pages/user/home/home';

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
