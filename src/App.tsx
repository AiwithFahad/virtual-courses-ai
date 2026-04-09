import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import ReelsPage from "./pages/ReelsPage";
import WishlistPage from "./pages/WishlistPage";
import CertificatePage from "./pages/CertificatePage";
import SearchPage from "./pages/SearchPage";
import ChatbotPage from "./pages/ChatbotPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/certificate/:courseId" element={<CertificatePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
