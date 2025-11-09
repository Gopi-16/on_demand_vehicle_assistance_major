// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./navbar";
import Login from "./Login";
import Register_user from "./Register_user";
import ServicePage from "./pages/ServicePage";
import ProfilePage from "./pages/ProfilePage";
import About from "./pages/AboutUs";
// function Home() {
//   return <h1 className="text-2xl">Home Page</h1>;
// }
// function About() {
//   return <h1 className="text-2xl">About Page</h1>;
// }
function Contact() {
  return <h1 className="text-2xl">Contact Page</h1>;
}

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Wrap all pages inside Layout */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

import EmailVerification from "./pages/emailVerification";
import Home from "./pages/Home";
import Navbar from "./components/Home/Navbar";
import ServiceForm from "./pages/Service_Form";

function App(){
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register_user/>}/>
          <Route path="services" element={<ServicePage/>}/>
          <Route path="services/request/:type" element={<ServiceForm/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="/verify-email" element={<EmailVerification />} />
    </Routes>
    </>
  )
}

export default App;