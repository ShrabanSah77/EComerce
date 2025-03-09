import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-lg font-bold">My App</h1>
        <nav>
          <Link to="/" className="px-3">
            Home
          </Link>
          <Link to="/login" className="px-3">
            Login
          </Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-3">
        © 2025 My App
      </footer>
    </div>
  );
};

export default MainLayout;
