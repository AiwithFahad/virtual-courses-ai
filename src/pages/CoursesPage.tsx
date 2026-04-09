// VC LMS - All Courses Page with Search & Filter
import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { COURSES, CATEGORIES } from "@/lib/courses";
import { FaSearch, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "students" | "title">("rating");

  const filtered = useMemo(() => {
    let result = COURSES;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.tags.some((t) => t.toLowerCase().includes(q)) || c.instructor.toLowerCase().includes(q)
      );
    }
    if (category !== "All") result = result.filter((c) => c.category === category);
    if (difficulty !== "All") result = result.filter((c) => c.difficulty === difficulty);
    result = [...result].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "students") return b.students - a.students;
      return a.title.localeCompare(b.title);
    });
    return result;
  }, [search, category, difficulty, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Courses</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, topics, instructors..."
            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-input rounded-lg px-3 py-2 text-sm bg-card focus:outline-none">
            <option value="All">All Categories</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="border border-input rounded-lg px-3 py-2 text-sm bg-card focus:outline-none">
            {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="border border-input rounded-lg px-3 py-2 text-sm bg-card focus:outline-none">
            <option value="rating">Sort by Rating</option>
            <option value="students">Sort by Popularity</option>
            <option value="title">Sort by Name</option>
          </select>
          <span className="text-sm text-muted-foreground flex items-center ml-auto">{filtered.length} courses found</span>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filtered.map((course, i) => (
            <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
