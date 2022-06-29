import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";

const App = () => {
  
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
