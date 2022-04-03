import React from 'react'
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
   <>
   <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/rooms/" element={<Rooms/>} />
      </Routes>
   </>
  );
}

export default App;
