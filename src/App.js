
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import Login from './auth/Login';
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import Error404 from "./pages/404";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cards" element={<CardList />} />
        <Route path="/new" element={<AddCard />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="*" element={<Error404 />} />
        {/* TODO: Complete the routes */}
        
      </Routes>
    </BrowserRouter>
  );
}