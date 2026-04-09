// VC LMS - Sign Up Page (Demo - creates student account in localStorage)
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { toast } from "sonner";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) { toast.error("Please fill all fields"); return; }
    toast.info("This is a demo app. Please use the demo login credentials.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card rounded-xl vc-shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <FaGraduationCap className="w-10 h-10 text-foreground mb-2" />
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-muted-foreground text-sm">Join Virtual Courses for free</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create password" className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account? <Link to="/login" className="text-foreground font-medium underline">Login</Link>
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Demo: Use student@vc.com / student123 to login
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
