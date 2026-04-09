// VC LMS - Footer Component
import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaGraduationCap className="w-6 h-6" />
              <span className="font-bold text-lg">Virtual Courses</span>
            </div>
            <p className="text-sm opacity-70">
              AI-powered learning platform with 100% free courses. Grow your skills and advance your career.
            </p>
            <div className="flex gap-3 mt-4">
              <FaTwitter className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
              <FaLinkedin className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
              <FaGithub className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
              <FaYoutube className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/courses" className="text-sm opacity-60 hover:opacity-100 transition-opacity">All Courses</Link>
              <Link to="/reels" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Micro-Learning Reels</Link>
              <Link to="/search" className="text-sm opacity-60 hover:opacity-100 transition-opacity">AI Search</Link>
              <Link to="/chatbot" className="text-sm opacity-60 hover:opacity-100 transition-opacity">AI Chatbot</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Categories</h3>
            <div className="flex flex-col gap-2">
              <Link to="/courses?category=App Development" className="text-sm opacity-60 hover:opacity-100 transition-opacity">App Development</Link>
              <Link to="/courses?category=AI & Machine Learning" className="text-sm opacity-60 hover:opacity-100 transition-opacity">AI & Machine Learning</Link>
              <Link to="/courses?category=Data Science & Analytics" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Data Science</Link>
              <Link to="/courses?category=Cybersecurity & Networking" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Cybersecurity</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Support</h3>
            <div className="flex flex-col gap-2">
              <Link to="/chatbot" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Help & FAQ</Link>
              <span className="text-sm opacity-60">contact@virtualcourses.com</span>
              <span className="text-sm opacity-60">+1 (555) 123-4567</span>
            </div>
            {/* Payment Placeholder */}
            <div className="mt-4 p-3 border border-primary-foreground/20 rounded-lg">
              <span className="text-xs opacity-50">💳 Payment Gateway Coming Soon</span>
              <p className="text-xs opacity-40 mt-1">All courses are currently FREE!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Virtual Courses (VC). All rights reserved. All courses are free.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
