// VC LMS - Home Page (Hero + Explore + Popular Courses + About + Reviews)
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaPlay, FaRobot, FaUsers, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics, TbBrandOpenai } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { SiGoogledataproc, SiOpenaigym } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { COURSES } from "@/lib/courses";
import { useAuth } from "@/contexts/AuthContext";

const STATS = [
  { icon: FaUsers, label: "Active Students", value: "50,000+" },
  { icon: FaGraduationCap, label: "Free Courses", value: "19+" },
  { icon: FaCertificate, label: "Certificates Issued", value: "25,000+" },
  { icon: FaChalkboardTeacher, label: "Expert Instructors", value: "15+" },
];

const CATEGORIES_DISPLAY = [
  { label: "Web Development", icon: TbDeviceDesktopAnalytics, bg: "bg-vc-purple" },
  { label: "UI/UX Design", icon: LiaUikit, bg: "bg-vc-green" },
  { label: "App Development", icon: MdAppShortcut, bg: "bg-vc-pink" },
  { label: "Ethical Hacking", icon: FaHackerrank, bg: "bg-vc-purple" },
  { label: "AI/ML", icon: TbBrandOpenai, bg: "bg-vc-green" },
  { label: "Data Science", icon: SiGoogledataproc, bg: "bg-vc-pink" },
  { label: "Data Analytics", icon: BsClipboardDataFill, bg: "bg-vc-purple" },
  { label: "AI Tools", icon: SiOpenaigym, bg: "bg-vc-green" },
];

const REVIEWS = [
  { name: "Priya Sharma", role: "Student", rating: 5, text: "The MERN stack course completely transformed my career. I got placed as a full-stack developer within 2 months!", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
  { name: "John Davis", role: "Student", rating: 5, text: "AI & ML course was incredibly detailed. The hands-on projects made complex concepts easy to understand.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
  { name: "Aisha Khan", role: "Student", rating: 4, text: "Love the micro-learning reels feature! I can learn quick concepts even during my commute.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha" },
  { name: "Carlos Rivera", role: "Educator", rating: 5, text: "Great platform to share knowledge. The educator dashboard makes course management effortless.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos" },
  { name: "Lin Wei", role: "Student", rating: 5, text: "The quizzes and certificates keep me motivated. Best free learning platform I've found!", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lin" },
  { name: "Emma Wilson", role: "Student", rating: 4, text: "UI/UX design course was amazing. Got my first freelance project right after completing it.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const popularCourses = COURSES.slice(0, 6);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Grow Your Skills to Advance Your Career Path
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mt-6 opacity-80 max-w-2xl mx-auto"
          >
            100% free AI-powered courses with certificates, quizzes, and micro-learning reels. Start learning today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-8 flex-wrap"
          >
            <button
              onClick={() => navigate("/courses")}
              className="px-6 py-3 border-2 border-primary-foreground rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-primary-foreground/10 transition-colors"
            >
              View All Courses <SiViaplay className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/search")}
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg text-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Search with AI <FaRobot className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <stat.icon className="w-8 h-8 text-muted-foreground" />
                <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="lg:w-[350px] text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold">Explore Our Courses</h2>
              <p className="text-muted-foreground mt-4">Discover courses across 6 categories designed by industry experts to help you succeed.</p>
              <button
                onClick={() => navigate("/courses")}
                className="mt-6 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 mx-auto lg:mx-0"
              >
                Explore Courses <SiViaplay className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 max-w-[720px]">
              {CATEGORIES_DISPLAY.map((cat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="w-[100px] flex flex-col items-center gap-2 cursor-pointer"
                  onClick={() => navigate(`/courses?category=${cat.label}`)}
                >
                  <div className={`w-[90px] h-[80px] ${cat.bg} rounded-lg flex items-center justify-center`}>
                    <cat.icon className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center font-medium">{cat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">Our Popular Courses</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Explore top-rated courses designed to boost your skills, enhance careers, and unlock opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => navigate("/courses")}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm flex items-center gap-2"
            >
              View All Courses <SiViaplay className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
              alt="Students learning"
              className="rounded-lg vc-shadow-lg w-full max-w-lg mx-auto"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 px-4">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">About Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">Maximize Your Learning Growth</h2>
            <p className="text-muted-foreground mt-4">
              We provide a modern AI-powered Learning Management System to simplify online education, track progress,
              and enhance student-instructor collaboration efficiently. All courses are completely free.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {["Simplified Learning", "Expert Trainers", "Big Experience", "Lifetime Access"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <BiSolidBadgeCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">Real Reviews from Real Learners</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Discover how Virtual Courses is transforming learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 rounded-lg vc-shadow"
              >
                <div className="flex items-center gap-1 mb-3 text-vc-yellow">
                  {Array(5).fill(0).map((_, j) => (
                    <span key={j} className={j < review.rating ? "" : "opacity-30"}>★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full bg-muted" />
                  <div>
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
