// VC LMS - Navigation Bar
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserCircle, FaHeart, FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Reels", path: "/reels" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaGraduationCap className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">Virtual Courses</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-opacity hover:opacity-80 ${isActive(link.path) ? "opacity-100 underline underline-offset-4" : "opacity-70"}`}
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <>
              <Link to="/wishlist" className="opacity-70 hover:opacity-100 transition-opacity">
                <FaHeart className="w-5 h-5" />
              </Link>
              <Link to="/search" className="text-sm font-medium opacity-70 hover:opacity-100">AI Search</Link>
              {(user.role === "educator" || user.role === "admin") && (
                <Link to="/dashboard" className="flex items-center gap-1 text-sm font-medium opacity-70 hover:opacity-100">
                  <MdDashboard className="w-4 h-4" /> Dashboard
                </Link>
              )}
              <Link to="/profile" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src={user.photoUrl} alt="" className="w-7 h-7 rounded-full bg-secondary" />
                <span className="text-sm">{user.name.split(" ")[0]}</span>
              </Link>
              <button onClick={() => { logout(); navigate("/"); }} className="text-sm opacity-70 hover:opacity-100 border border-primary-foreground/30 px-3 py-1 rounded-md">
                Logout
              </button>
            </>
          )}
          {!user && (
            <Link to="/login" className="border border-primary-foreground/30 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-primary-foreground/10 transition-colors">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-primary border-t border-primary-foreground/10"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)} className="text-sm py-2">
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="text-sm py-2">Wishlist</Link>
                  <Link to="/search" onClick={() => setMenuOpen(false)} className="text-sm py-2">AI Search</Link>
                  <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-sm py-2">Profile</Link>
                  <Link to="/my-courses" onClick={() => setMenuOpen(false)} className="text-sm py-2">My Courses</Link>
                  {(user.role === "educator" || user.role === "admin") && (
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-sm py-2">Dashboard</Link>
                  )}
                  <button onClick={() => { logout(); navigate("/"); setMenuOpen(false); }} className="text-sm py-2 text-left">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMenuOpen(false)} className="text-sm py-2">Login</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
