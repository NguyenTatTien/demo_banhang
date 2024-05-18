import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import SignUp from './pages/signUp';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Default from './layouts/default';
function App() {
  return (
    <BrowserRouter>
   
    <Routes>

    <Route path="/login" element={<Login />} />
     <Route path="/signUp" element={<SignUp />} />
     <Route path="/" element={<Default />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
     </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
