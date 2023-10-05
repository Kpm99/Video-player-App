import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Videos from './components/video';
import Upload from './components/upload';
import Login from './components/login';
import SignUp from './components/signup';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      
      </Routes>

    <Footer/>
    </Router>
  )
}

export default App;
