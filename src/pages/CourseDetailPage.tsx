// VC LMS - Course Detail Page with modules, lessons, enrollment, quiz, certificates
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { getCourseById, getCourseProgress } from "@/lib/courses";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { FaStar, FaUsers, FaClock, FaPlay, FaCheckCircle, FaLock, FaHeart, FaRegHeart, FaCertificate, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user, enroll, toggleWish, completeModuleAction, getCertificate } = useAuth();
  const course = getCourseById(courseId || "");
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<{ moduleId: string; lessonId: string } | null>(null);
  const [showQuiz, setShowQuiz] = useState<string | null>(null);

  if (!course) return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <button onClick={() => navigate("/courses")} className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg">Browse Courses</button>
      </div>
    </div>
  );

  const isEnrolled = user?.enrolledCourses.includes(course.id) || false;
  const isWishlisted = user?.wishlist.includes(course.id) || false;
  const completedModules = user?.completedModules[course.id] || [];
  const progress = getCourseProgress(course.id, completedModules);
  const quizScore = user?.quizScores[course.id];
  const hasCertificate = user?.certificates.includes(course.id) || false;

  const handleEnroll = () => {
    if (!user) { toast.error("Please login first"); navigate("/login"); return; }
    enroll(course.id);
    toast.success("Enrolled successfully! All courses are free 🎉");
  };

  const handleCompleteModule = (moduleId: string) => {
    if (!user) return;
    completeModuleAction(course.id, moduleId);
    toast.success("Module completed! ✅");
  };

  const handleGetCertificate = () => {
    if (progress < 100) { toast.error("Complete all modules first"); return; }
    getCertificate(course.id);
    toast.success("Certificate earned! 🎓");
  };

  // Get current video to display
  const currentLesson = activeLesson
    ? course.modules.find(m => m.id === activeLesson.moduleId)?.lessons.find(l => l.id === activeLesson.lessonId)
    : course.modules[0]?.lessons[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded">{course.category}</span>
              <h1 className="text-2xl md:text-3xl font-bold mt-3">{course.title}</h1>
              <p className="mt-3 opacity-80 text-sm">{course.description}</p>
              <div className="flex items-center gap-4 mt-4 flex-wrap text-sm">
                <div className="flex items-center gap-1">
                  <FaStar className="text-vc-yellow" /> {course.rating} ({course.reviews} reviews)
                </div>
                <div className="flex items-center gap-1">
                  <FaUsers /> {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center gap-1">
                  <FaClock /> {course.duration}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img src={course.instructorAvatar} alt="" className="w-8 h-8 rounded-full bg-secondary" />
                <span className="text-sm">Created by <strong>{course.instructor}</strong></span>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-card text-card-foreground rounded-lg p-6 vc-shadow-lg">
                {/* Video Preview */}
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                  {currentLesson && (
                    <iframe
                      src={currentLesson.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={currentLesson.title}
                    />
                  )}
                </div>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-foreground">FREE</span>
                </div>
                {!isEnrolled ? (
                  <button onClick={handleEnroll} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Enroll Now – Free
                  </button>
                ) : (
                  <div className="space-y-3">
                    <ProgressBar value={progress} label="Course Progress" />
                    {progress === 100 && !hasCertificate && (
                      <button onClick={handleGetCertificate} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                        <FaCertificate /> Get Certificate
                      </button>
                    )}
                    {hasCertificate && (
                      <button onClick={() => navigate(`/certificate/${course.id}`)} className="w-full border border-border py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 text-foreground">
                        <FaCertificate /> View Certificate
                      </button>
                    )}
                  </div>
                )}
                {user && (
                  <button onClick={() => toggleWish(course.id)} className="w-full mt-2 border border-border py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors">
                    {isWishlisted ? <><FaHeart className="text-destructive" /> Remove from Wishlist</> : <><FaRegHeart /> Add to Wishlist</>}
                  </button>
                )}
                <div className="mt-4 text-xs text-muted-foreground space-y-1">
                  <p>✓ {course.totalLessons} lessons • {course.modules.length} modules</p>
                  <p>✓ Interactive quizzes</p>
                  <p>✓ Certificate of completion</p>
                  <p>✓ Lifetime access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Course Content</h2>
        <p className="text-sm text-muted-foreground mb-6">{course.modules.length} modules • {course.totalLessons} lessons • {course.duration}</p>

        <div className="space-y-3">
          {course.modules.map((mod) => {
            const isCompleted = completedModules.includes(mod.id);
            const isExpanded = expandedModule === mod.id;

            return (
              <div key={mod.id} className="border border-border rounded-lg overflow-hidden bg-card">
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isCompleted ? <FaCheckCircle className="text-foreground flex-shrink-0" /> : <div className="w-4 h-4 border-2 border-muted-foreground rounded-full flex-shrink-0" />}
                    <span className="font-medium text-sm text-left">{mod.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{mod.lessons.length} lessons</span>
                    {isExpanded ? <FaChevronUp className="text-muted-foreground" /> : <FaChevronDown className="text-muted-foreground" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="border-t border-border p-4 space-y-2">
                        {mod.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                              isEnrolled ? "hover:bg-muted" : "opacity-60"
                            } ${activeLesson?.lessonId === lesson.id ? "bg-muted" : ""}`}
                            onClick={() => isEnrolled && setActiveLesson({ moduleId: mod.id, lessonId: lesson.id })}
                          >
                            {isEnrolled ? <FaPlay className="w-3 h-3 text-muted-foreground flex-shrink-0" /> : <FaLock className="w-3 h-3 text-muted-foreground flex-shrink-0" />}
                            <span className="text-sm flex-1">{lesson.title}</span>
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}

                        {/* Quiz Button */}
                        {mod.quiz.length > 0 && isEnrolled && (
                          <button
                            onClick={() => setShowQuiz(mod.id)}
                            className="w-full mt-2 text-sm py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                          >
                            📝 Take Quiz ({mod.quiz.length} questions)
                          </button>
                        )}

                        {/* Complete Module */}
                        {isEnrolled && !isCompleted && (
                          <button
                            onClick={() => handleCompleteModule(mod.id)}
                            className="w-full mt-2 text-sm py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
                          >
                            ✓ Mark Module as Complete
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag) => (
              <span key={tag} className="text-xs bg-muted px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && <QuizModal courseId={course.id} moduleId={showQuiz} quiz={course.modules.find(m => m.id === showQuiz)?.quiz || []} onClose={() => setShowQuiz(null)} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

// Quiz Modal Component
import type { QuizQuestion } from "@/lib/courses";

const QuizModal = ({ courseId, moduleId, quiz, onClose }: { courseId: string; moduleId: string; quiz: QuizQuestion[]; onClose: () => void }) => {
  const { submitQuiz } = useAuth();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    let score = 0;
    quiz.forEach((q) => { if (answers[q.id] === q.correctAnswer) score++; });
    submitQuiz(courseId, score, quiz.length);
    setSubmitted(true);
    toast.success(`Quiz completed! Score: ${score}/${quiz.length}`);
  };

  const score = submitted ? quiz.filter((q) => answers[q.id] === q.correctAnswer).length : 0;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-card rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">📝 Module Quiz</h2>

        {!submitted ? (
          <>
            {quiz.map((q, i) => (
              <div key={q.id} className="mb-6">
                <p className="font-medium text-sm mb-2">{i + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => (
                    <label key={j} className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${answers[q.id] === j ? "border-foreground bg-muted" : "border-border hover:bg-muted/50"}`}>
                      <input type="radio" name={q.id} checked={answers[q.id] === j} onChange={() => setAnswers({ ...answers, [q.id]: j })} className="accent-foreground" />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < quiz.length} className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-lg font-medium disabled:opacity-50">
                Submit Quiz
              </button>
              <button onClick={onClose} className="px-4 py-2.5 border border-border rounded-lg text-sm">Cancel</button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">{score === quiz.length ? "🎉" : score > quiz.length / 2 ? "👍" : "📚"}</div>
            <p className="text-xl font-bold">Score: {score}/{quiz.length}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {score === quiz.length ? "Perfect score!" : score > quiz.length / 2 ? "Good job!" : "Keep practicing!"}
            </p>
            <div className="flex gap-3 mt-4">
              <button onClick={() => { setSubmitted(false); setAnswers({}); }} className="flex-1 border border-border py-2 rounded-lg text-sm">Retake</button>
              <button onClick={onClose} className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg text-sm">Close</button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CourseDetailPage;
