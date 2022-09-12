import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./Styles/GlobalStyle";
import PrivatePage from "./Common/PrivatePage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Inflow from "./Components/Inflow";
import Outflow from "./Components/Outflow";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route 
          path='/home' 
          element={
            <PrivatePage>
              <Home />
            </PrivatePage>
          } 
        />
        <Route 
          path='/entrada' 
          element={
            <PrivatePage>
              <Inflow />
            </PrivatePage>
          } 
        />
        <Route 
          path='/saida' 
          element={
            <PrivatePage>
              <Outflow />
            </PrivatePage>
          } 
        />
      </Routes>
    </BrowserRouter>
    
  );
}

