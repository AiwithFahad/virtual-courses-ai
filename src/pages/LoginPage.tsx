// VC LMS - Login Page with Dummy Credentials
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { FaGraduationCap, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) { toast.error("Please fill all fields"); return; }
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      const result = login(email, password);
      if (result.success) {
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error(result.error || "Login failed");
      }
      setLoading(false);
    }, 500);
  };

  const quickLogin = (e: string, p: string) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card rounded-xl vc-shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <FaGraduationCap className="w-10 h-10 text-foreground mb-2" />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Login to your account</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring pr-10"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Quick Login Buttons (Demo) */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-3">Quick Demo Login</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => quickLogin("student@vc.com", "student123")} className="w-full text-sm py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              🎓 Student (student@vc.com)
            </button>
            <button onClick={() => quickLogin("educator@vc.com", "educator123")} className="w-full text-sm py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              👨‍🏫 Educator (educator@vc.com)
            </button>
            <button onClick={() => quickLogin("admin@vc.com", "admin123")} className="w-full text-sm py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              🔑 Admin (admin@vc.com)
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Don't have an account? <Link to="/signup" className="text-foreground font-medium underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
