// VC LMS - Wishlist Page
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseById } from "@/lib/courses";
import { FaHeart } from "react-icons/fa";

const WishlistPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) { navigate("/login"); return null; }

  const wishlistCourses = user.wishlist.map(getCourseById).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <FaHeart className="w-6 h-6 text-destructive" />
          <h1 className="text-2xl font-bold">My Wishlist</h1>
          <span className="text-sm text-muted-foreground">({wishlistCourses.length} courses)</span>
        </div>

        {wishlistCourses.length === 0 ? (
          <div className="bg-card rounded-lg p-12 text-center vc-shadow">
            <FaHeart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
            <button onClick={() => navigate("/courses")} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {wishlistCourses.map((course) => course && <CourseCard key={course.id} course={course} />)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
