import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Header from './components/Header';
function App() {
  return (
    <Sidebar>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    </Sidebar>
  );
}

export default App;
