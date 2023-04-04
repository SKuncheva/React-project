import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { About } from "./components/Others/About";
import { Protection } from "./components/Others/Protection";
import { Register } from "./components/Register/Register";
import { Catalog } from "./components/Catalog/Catalog";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { UserAuthenticate } from "./context/context";
import * as authService from "./services/authenticationService";
import { useNavigate } from "react-router-dom";
import { Logout } from "./components/Logout/Logout";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { useStorige } from "./hooks/storigeHook";
import { Profile } from "./components/Profile/Profile";

function App() {
  const [authenticate, setAuthenticate] = useStorige("authenticate", {});
  const navigate = useNavigate();

  const onLoginSubmitHandler = async (information) => {
    try {
      const resData = await authService.login(information);
      setAuthenticate(resData);
      navigate("/");
    } catch (error) {
      alert("Грешно въведени данни");
    }
  };
  // const userId = authenticate._id;
  // const userToken = authenticate.accessToken;
  // const userEmail = authenticate.email;

  const onRegister = async (information) => {
    try {
      const resData = await authService.register(information);
      setAuthenticate(resData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onLogout = () => {
    setAuthenticate({});
  };

  return (
    <>
      <UserAuthenticate.Provider
        value={{
          authenticate,
          onLoginSubmitHandler,
          onRegister,
          onLogout,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/protection" element={<Protection />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Footer />
      </UserAuthenticate.Provider>
    </>
  );
}

export default App;
