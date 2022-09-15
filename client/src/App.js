import Navbar from "./components/navbar/Navbar";
import {  Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Questionpage from "./Pages/Questionpage";
import AskQuestion from "./Pages/AskQuestion";
import DisplayQuestion from "./Pages/DisplayQuestion";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<LoginPage/>}/>
        <Route path="/questions" element={<Questionpage/>}/>
        <Route path="/askquestions" element={<AskQuestion/>}/>
        <Route path="/questions/:id" element={<DisplayQuestion/>}/>
      </Routes>
    </div>
  );
}

export default App;
