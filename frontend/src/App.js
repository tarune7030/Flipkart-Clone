import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/productdetail" element={<SingleProductPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
