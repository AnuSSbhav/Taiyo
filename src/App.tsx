import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Graphs from './components/Graph';
import Header from './components/Header';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Sidebar>
    <Header/>
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/graphs" element={<Graphs/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
