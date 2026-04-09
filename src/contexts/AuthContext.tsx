// VC LMS - React Context for Auth State Management
import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { getCurrentUser, login as authLogin, logout as authLogout, updateUser, enrollInCourse, toggleWishlist, completeModule, saveQuizScore, earnCertificate, type User } from "@/lib/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  refresh: () => void;
  enroll: (courseId: string) => void;
  toggleWish: (courseId: string) => void;
  completeModuleAction: (courseId: string, moduleId: string) => void;
  submitQuiz: (courseId: string, score: number, total: number) => void;
  getCertificate: (courseId: string) => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(getCurrentUser());
    setIsLoading(false);
  }, []);

  const refresh = useCallback(() => setUser(getCurrentUser()), []);

  const login = useCallback((email: string, password: string) => {
    const result = authLogin(email, password);
    if (result.success && result.user) setUser(result.user);
    return { success: result.success, error: result.error };
  }, []);

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
  }, []);

  const enroll = useCallback((courseId: string) => {
    const updated = enrollInCourse(courseId);
    if (updated) setUser({ ...updated });
  }, []);

  const toggleWish = useCallback((courseId: string) => {
    const updated = toggleWishlist(courseId);
    if (updated) setUser({ ...updated });
  }, []);

  const completeModuleAction = useCallback((courseId: string, moduleId: string) => {
    const updated = completeModule(courseId, moduleId);
    if (updated) setUser({ ...updated });
  }, []);

  const submitQuiz = useCallback((courseId: string, score: number, total: number) => {
    const updated = saveQuizScore(courseId, score, total);
    if (updated) setUser({ ...updated });
  }, []);

  const getCertificate = useCallback((courseId: string) => {
    const updated = earnCertificate(courseId);
    if (updated) setUser({ ...updated });
  }, []);

  const updateProfile = useCallback((updates: Partial<User>) => {
    const updated = updateUser(updates);
    if (updated) setUser({ ...updated });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, refresh, enroll, toggleWish, completeModuleAction, submitQuiz, getCertificate, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
