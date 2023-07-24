import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Update } from "./components/Update";
import { Logout } from "./components/Logout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/update/:id" element={ <Update/> } />
      <Route path="/logout" element={ <Logout/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;