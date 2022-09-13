import Navbar from "./components/navbar/Navbar";
import {  Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
