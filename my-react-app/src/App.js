import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navbar/navbar"
import Faqs from "./pages/FAQ/FAQs"
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/FAQs" element={<Faqs/>} />
      </Routes>
      
    

    </div>
  );
}

export default App;
