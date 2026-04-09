// VC LMS - My Enrolled Courses Page
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseById, getCourseProgress } from "@/lib/courses";
import { FaGraduationCap } from "react-icons/fa";

const MyCoursesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) { navigate("/login"); return null; }

  const courses = user.enrolledCourses.map(getCourseById).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaGraduationCap /> My Courses ({courses.length})
        </h1>

        {courses.length === 0 ? (
          <div className="bg-card rounded-lg p-12 text-center vc-shadow">
            <p className="text-muted-foreground mb-4">You haven't enrolled in any courses yet.</p>
            <button onClick={() => navigate("/courses")} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Browse Courses</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course) => {
              if (!course) return null;
              const progress = getCourseProgress(course.id, user.completedModules[course.id] || []);
              return (
                <div key={course.id} className="bg-card rounded-lg vc-shadow overflow-hidden cursor-pointer hover:vc-shadow-lg transition-shadow" onClick={() => navigate(`/course/${course.id}`)}>
                  <div className="flex">
                    <img src={course.thumbnail} alt="" className="w-32 h-24 object-cover" />
                    <div className="p-4 flex-1">
                      <h3 className="font-medium text-sm line-clamp-2">{course.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>
                      <div className="mt-2">
                        <ProgressBar value={progress} size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyCoursesPage;
