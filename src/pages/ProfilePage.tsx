// VC LMS - Profile Page
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseById, getCourseProgress } from "@/lib/courses";
import { FaEnvelope, FaGraduationCap, FaCertificate, FaTrophy } from "react-icons/fa";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) { navigate("/login"); return null; }

  const enrolledCourses = user.enrolledCourses.map(getCourseById).filter(Boolean);
  const totalQuizzes = Object.keys(user.quizScores).length;
  const avgScore = totalQuizzes > 0
    ? Math.round(Object.values(user.quizScores).reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / totalQuizzes)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="bg-card rounded-xl p-6 vc-shadow flex flex-col md:flex-row items-center gap-6 mb-6">
          <img src={user.photoUrl} alt={user.name} className="w-24 h-24 rounded-full bg-muted" />
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start mt-1">
              <FaEnvelope className="w-3 h-3" /> {user.email}
            </p>
            <span className="inline-block mt-2 text-xs bg-muted px-3 py-1 rounded-full capitalize">{user.role}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: FaGraduationCap, label: "Enrolled", value: user.enrolledCourses.length },
            { icon: FaCertificate, label: "Certificates", value: user.certificates.length },
            { icon: FaTrophy, label: "Quizzes Taken", value: totalQuizzes },
            { icon: FaTrophy, label: "Avg. Score", value: `${avgScore}%` },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-lg p-4 vc-shadow text-center">
              <stat.icon className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Enrolled Courses with Progress */}
        <h2 className="text-xl font-bold mb-4">My Courses</h2>
        {enrolledCourses.length === 0 ? (
          <div className="bg-card rounded-lg p-8 text-center vc-shadow">
            <p className="text-muted-foreground">No courses enrolled yet.</p>
            <button onClick={() => navigate("/courses")} className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Browse Courses</button>
          </div>
        ) : (
          <div className="space-y-3">
            {enrolledCourses.map((course) => {
              if (!course) return null;
              const progress = getCourseProgress(course.id, user.completedModules[course.id] || []);
              return (
                <div key={course.id} className="bg-card rounded-lg p-4 vc-shadow flex flex-col md:flex-row items-center gap-4 cursor-pointer hover:vc-shadow-lg transition-shadow" onClick={() => navigate(`/course/${course.id}`)}>
                  <img src={course.thumbnail} alt="" className="w-20 h-14 object-cover rounded-md" />
                  <div className="flex-1 w-full">
                    <h3 className="font-medium text-sm">{course.title}</h3>
                    <p className="text-xs text-muted-foreground">{course.instructor}</p>
                    <ProgressBar value={progress} size="sm" />
                  </div>
                  <div className="text-sm font-medium">{progress}%</div>
                </div>
              );
            })}
          </div>
        )}

        {/* Certificates */}
        {user.certificates.length > 0 && (
          <>
            <h2 className="text-xl font-bold mt-8 mb-4">My Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.certificates.map((certCourseId) => {
                const course = getCourseById(certCourseId);
                if (!course) return null;
                return (
                  <div key={certCourseId} className="bg-card rounded-lg p-4 vc-shadow flex items-center gap-4 cursor-pointer" onClick={() => navigate(`/certificate/${certCourseId}`)}>
                    <FaCertificate className="w-8 h-8 text-vc-yellow flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sm">{course.title}</h3>
                      <p className="text-xs text-muted-foreground">Certificate of Completion</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
