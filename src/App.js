import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { About } from "./components/Others/About";
import { Protection } from "./components/Others/Protection";
import { Register } from "./components/Register/Register";


function App() {
 
  return (
    <>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/catalog" element={<Catalog />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/protection" element={<Protection />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
