// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function Home() {
  return <h1 className="text-2xl">Home Page</h1>;
}
function About() {
  return <h1 className="text-2xl">About Page</h1>;
}
function Contact() {
  return <h1 className="text-2xl">Contact Page</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
