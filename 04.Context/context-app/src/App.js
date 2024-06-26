import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginContextProvider from './contexts/LoginContextProvider';
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import User from './page/User';
import About from './page/About';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/join' element={<Join />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </LoginContextProvider >
    </BrowserRouter>
  );
}

export default App;
