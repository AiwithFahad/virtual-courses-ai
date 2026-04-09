// VC LMS - Dashboard for Educators & Admin
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { COURSES } from "@/lib/courses";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaBook, FaStar, FaChartLine, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend } from "recharts";

// Dummy analytics data
const ENROLLMENT_DATA = [
  { month: "Jan", students: 820 },
  { month: "Feb", students: 1200 },
  { month: "Mar", students: 1800 },
  { month: "Apr", students: 2100 },
  { month: "May", students: 2800 },
  { month: "Jun", students: 3500 },
];

const CATEGORY_DATA = [
  { name: "App Dev", value: 35 },
  { name: "AI/ML", value: 28 },
  { name: "Data Science", value: 15 },
  { name: "Cybersecurity", value: 10 },
  { name: "Marketing", value: 7 },
  { name: "Design", value: 5 },
];

const COMPLETION_DATA = [
  { month: "Jan", rate: 45 },
  { month: "Feb", rate: 52 },
  { month: "Mar", rate: 58 },
  { month: "Apr", rate: 65 },
  { month: "May", rate: 72 },
  { month: "Jun", rate: 78 },
];

const COLORS = ["hsl(0,0%,0%)", "hsl(0,0%,20%)", "hsl(0,0%,40%)", "hsl(0,0%,55%)", "hsl(0,0%,70%)", "hsl(0,0%,85%)"];

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || (user.role !== "educator" && user.role !== "admin")) {
    navigate("/");
    return null;
  }

  const totalStudents = COURSES.reduce((sum, c) => sum + c.students, 0);
  const avgRating = (COURSES.reduce((sum, c) => sum + c.rating, 0) / COURSES.length).toFixed(1);

  const stats = [
    { icon: FaBook, label: "Total Courses", value: COURSES.length },
    { icon: FaUsers, label: "Total Students", value: totalStudents.toLocaleString() },
    { icon: FaStar, label: "Avg Rating", value: avgRating },
    { icon: FaCertificate, label: "Certificates", value: "25,000+" },
    { icon: FaChartLine, label: "Completion Rate", value: "78%" },
    { icon: FaChalkboardTeacher, label: "Instructors", value: "15+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">{user.role === "admin" ? "Admin" : "Educator"} Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, {user.name}</p>
          </div>
          {user.role === "educator" && (
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              + Create Course
            </button>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card rounded-lg p-4 vc-shadow text-center">
              <stat.icon className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 vc-shadow">
            <h3 className="font-semibold mb-4">Student Enrollment Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ENROLLMENT_DATA}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="students" fill="hsl(0,0%,0%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl p-6 vc-shadow">
            <h3 className="font-semibold mb-4">Category Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={CATEGORY_DATA} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name }) => name}>
                  {CATEGORY_DATA.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl p-6 vc-shadow lg:col-span-2">
            <h3 className="font-semibold mb-4">Course Completion Rate Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={COMPLETION_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rate" stroke="hsl(0,0%,0%)" strokeWidth={2} name="Completion %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course List */}
        <div className="bg-card rounded-xl p-6 vc-shadow">
          <h3 className="font-semibold mb-4">All Courses</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4">Course</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Students</th>
                  <th className="text-left py-3 px-4">Rating</th>
                  <th className="text-left py-3 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {COURSES.map((course) => (
                  <tr key={course.id} className="border-b hover:bg-muted/50 cursor-pointer transition-colors" onClick={() => navigate(`/course/${course.id}`)}>
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img src={course.thumbnail} alt="" className="w-16 h-10 object-cover rounded" />
                      <span className="font-medium">{course.title}</span>
                    </td>
                    <td className="py-3 px-4">{course.category}</td>
                    <td className="py-3 px-4">{course.students.toLocaleString()}</td>
                    <td className="py-3 px-4">⭐ {course.rating}</td>
                    <td className="py-3 px-4"><span className="bg-vc-green px-2 py-0.5 rounded text-xs">Free</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
