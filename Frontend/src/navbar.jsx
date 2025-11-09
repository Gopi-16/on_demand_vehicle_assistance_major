import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/ServiceForm">Service Form</Link>
        <Link to="/ProfilePage">Profile Page</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}