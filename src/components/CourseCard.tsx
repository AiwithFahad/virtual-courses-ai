// VC LMS - Course Card Component
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart, FaUsers } from "react-icons/fa";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import type { Course } from "@/lib/courses";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { user, toggleWish } = useAuth();
  const isWishlisted = user?.wishlist.includes(course.id) || false;
  const isEnrolled = user?.enrolledCourses.includes(course.id) || false;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-card rounded-lg overflow-hidden vc-shadow hover:vc-shadow-lg transition-shadow w-full max-w-sm"
    >
      <Link to={`/course/${course.id}`}>
        <div className="relative">
          <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" loading="lazy" />
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
            FREE
          </span>
          <span className="absolute top-3 right-12 bg-card text-card-foreground text-xs px-2 py-1 rounded-md">
            {course.difficulty}
          </span>
        </div>
      </Link>

      {user && (
        <button
          onClick={(e) => { e.preventDefault(); toggleWish(course.id); }}
          className="absolute top-3 right-3 bg-card p-1.5 rounded-full vc-shadow"
        >
          {isWishlisted ? <FaHeart className="w-4 h-4 text-destructive" /> : <FaRegHeart className="w-4 h-4 text-muted-foreground" />}
        </button>
      )}

      <div className="p-4">
        <span className="text-xs text-muted-foreground font-medium">{course.category}</span>
        <Link to={`/course/${course.id}`}>
          <h3 className="font-semibold text-card-foreground mt-1 line-clamp-2 hover:underline text-sm">
            {course.title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="w-3.5 h-3.5 text-vc-yellow" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-xs text-muted-foreground">({course.reviews})</span>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <FaUsers className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{course.students.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">{course.duration} • {course.totalLessons} lessons</span>
          {isEnrolled && (
            <span className="text-xs bg-vc-green text-foreground px-2 py-0.5 rounded-full font-medium">Enrolled</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
