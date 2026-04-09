// VC LMS - AI Search Page with Course Recommendations
import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { searchCourses, getRecommendedCourses, COURSES } from "@/lib/courses";
import { useAuth } from "@/contexts/AuthContext";
import { FaRobot, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [aiSuggestion, setAiSuggestion] = useState("");
  const { user } = useAuth();

  const results = useMemo(() => (query.length > 1 ? searchCourses(query) : []), [query]);
  const recommended = useMemo(
    () => getRecommendedCourses(user?.enrolledCourses || [], 6),
    [user?.enrolledCourses]
  );

  const handleAiSearch = () => {
    if (!query) return;
    // Dummy AI recommendation logic
    const q = query.toLowerCase();
    let suggestion = "";
    if (q.includes("web") || q.includes("react") || q.includes("frontend")) {
      suggestion = "Based on your interest in web development, I recommend starting with **Frontend Mastery – React, Tailwind, Animations** for beginners, or **Full-Stack Web Development – MERN Stack** for a comprehensive path. These courses will give you strong foundations in modern web technologies.";
    } else if (q.includes("ai") || q.includes("machine learning") || q.includes("ml")) {
      suggestion = "For AI/ML, I recommend the **AI Engineer** course which covers everything from Python to LLMs. If you're just starting, try **AI Tools & Applications** first to get familiar with practical AI tools.";
    } else if (q.includes("data")) {
      suggestion = "For data careers, start with **Data Science Foundations** to learn Python, Pandas, and NumPy. Then advance to **Advanced Data Analytics** or **Big Data & Spark** depending on your goals.";
    } else if (q.includes("hack") || q.includes("security") || q.includes("cyber")) {
      suggestion = "For cybersecurity, our **Ethical Hacking & Penetration Testing** course is highly rated with 12,000+ students. Pair it with **Networking Essentials** for a complete security foundation.";
    } else if (q.includes("design") || q.includes("ui") || q.includes("ux")) {
      suggestion = "For design, I recommend **UI/UX Design – Figma, Prototyping, User Testing**. It covers everything from wireframing to user testing. You can also explore **3D & Motion Graphics** for advanced visual skills.";
    } else if (q.includes("market") || q.includes("business") || q.includes("seo")) {
      suggestion = "For digital marketing, our **Digital Marketing Masterclass** covers SEO, SEM, and social media. Pair it with **E-Commerce & Entrepreneurship** if you're building an online business.";
    } else {
      suggestion = `I found ${results.length} courses matching "${query}". Browse the results below or try more specific terms like "React", "AI", "Data Science", or "Cybersecurity" for tailored recommendations.`;
    }
    setAiSuggestion(suggestion);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <FaRobot className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
          <h1 className="text-3xl font-bold">AI-Powered Course Search</h1>
          <p className="text-muted-foreground mt-2">Get personalized course recommendations powered by AI</p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setAiSuggestion(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleAiSearch()}
                placeholder="What do you want to learn? (e.g., React, AI, Data Science)"
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button onClick={handleAiSearch} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 text-sm">
              <FaRobot /> Search
            </button>
          </div>
        </div>

        {/* AI Suggestion */}
        {aiSuggestion && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto mb-8 bg-card rounded-lg p-5 vc-shadow border-l-4 border-foreground">
            <div className="flex items-start gap-3">
              <FaRobot className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm leading-relaxed">
                {aiSuggestion.split("**").map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Search Results */}
        {results.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-4">Search Results ({results.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-12">
              {results.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        )}

        {/* AI Recommendations */}
        <h2 className="text-xl font-bold mb-4">🤖 AI Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {recommended.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
