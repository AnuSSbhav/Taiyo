import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

import Header from './components/Header';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Dashboard from '../src/components/dashboard/Dashboard'
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Sidebar>
    <Header/>
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/graphs" element={<Dashboard/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
