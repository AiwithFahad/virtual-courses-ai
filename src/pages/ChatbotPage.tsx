// VC LMS - AI Chatbot for FAQs, Career Guidance, Course Support
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

interface Message {
  role: "user" | "bot";
  content: string;
}

// Dummy AI chatbot responses
const BOT_RESPONSES: Record<string, string> = {
  hello: "Hello! 👋 I'm VC Assistant, your AI learning companion. How can I help you today? I can assist with:\n\n• **Course recommendations**\n• **Career guidance**\n• **FAQ answers**\n• **Learning path advice**",
  hi: "Hi there! 👋 Welcome to Virtual Courses. Ask me about courses, career paths, or anything about our platform!",
  courses: "We offer **19+ free courses** across 6 categories:\n\n1. **App Development** - MERN, Flutter, React Native, DevOps\n2. **AI & Machine Learning** - Python, ML, Deep Learning, NLP, LLMs\n3. **Data Science** - Pandas, NumPy, Spark, Analytics\n4. **Cybersecurity** - Ethical Hacking, Networking\n5. **Digital Marketing** - SEO, E-Commerce\n6. **Creative & Design** - UI/UX, 3D & Motion Graphics\n\nAll courses are **completely free** with certificates!",
  career: "Here are some popular career paths:\n\n🖥️ **Full-Stack Developer**: Start with MERN Stack → DevOps\n🤖 **AI Engineer**: Python → ML → Deep Learning → NLP/LLMs\n📊 **Data Scientist**: Python → Data Science → Big Data\n🔒 **Security Analyst**: Networking → Ethical Hacking\n🎨 **UI/UX Designer**: Figma → User Testing\n📈 **Digital Marketer**: SEO → Analytics → E-Commerce\n\nWould you like specific guidance for any path?",
  certificate: "Our certificates include:\n\n✅ **Verification links** for authenticity\n✅ **Unique Certificate ID**\n✅ **Course details** & completion date\n✅ **Printable format**\n\nComplete all modules in a course to earn your certificate!",
  free: "Yes! **All 19+ courses are completely free!** No hidden charges, no credit card required. Just sign up and start learning. We believe education should be accessible to everyone. 🎓",
  quiz: "Each module has **interactive quizzes** with:\n\n• Multiple-choice questions\n• Instant score feedback\n• **Unlimited retakes**\n• Score tracking in your profile\n\nQuizzes help reinforce learning and track your progress!",
  login: "Demo credentials:\n\n🎓 **Student**: student@vc.com / student123\n👨‍🏫 **Educator**: educator@vc.com / educator123\n🔑 **Admin**: admin@vc.com / admin123",
  recommend: "Based on popularity, I recommend:\n\n1. **AI Engineer** (15,000+ students, ⭐ 4.9)\n2. **Frontend Mastery** (11,000+ students, ⭐ 4.9)\n3. **Ethical Hacking** (12,000+ students, ⭐ 4.8)\n4. **Full-Stack Web Development** (8,500+ students, ⭐ 4.8)\n\nWhat field interests you most?",
  help: "I can help with:\n\n• 📚 **Course info** - Ask about any course\n• 🎯 **Career guidance** - Career path advice\n• 🏆 **Certificates** - How to earn them\n• 📝 **Quizzes** - How they work\n• 🔑 **Login help** - Demo credentials\n• 💡 **Recommendations** - Personalized suggestions\n\nJust type your question!",
};

function getBotResponse(input: string): string {
  const q = input.toLowerCase();
  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (q.includes(key)) return response;
  }
  if (q.includes("web") || q.includes("react") || q.includes("node") || q.includes("mern"))
    return "For web development, I recommend our **Full-Stack Web Development – MERN Stack** course. It covers MongoDB, Express, React, and Node.js with hands-on projects. If you're a beginner, start with **Frontend Mastery** first!";
  if (q.includes("ai") || q.includes("machine") || q.includes("deep") || q.includes("nlp"))
    return "For AI/ML, check out our **AI Engineer** course – it's our most comprehensive program covering Python, ML, Deep Learning, NLP, and LLMs. For quick AI skills, try **AI Tools & Applications**.";
  if (q.includes("data"))
    return "For data careers, start with **Data Science Foundations** and then move to **Advanced Data Analytics** or **Big Data & Spark** depending on your interest.";
  if (q.includes("hack") || q.includes("security"))
    return "Our **Ethical Hacking** course is one of the most popular with 12,000+ students. Great for aspiring security professionals!";
  if (q.includes("design") || q.includes("figma"))
    return "Check out our **UI/UX Design** course! It covers Figma, prototyping, and user testing. Perfect for aspiring designers.";
  if (q.includes("thank"))
    return "You're welcome! 😊 Happy learning! Feel free to ask if you need anything else.";
  return "I'm not sure about that, but I can help with course recommendations, career guidance, certificates, quizzes, and general platform questions. Try asking about a specific topic like 'AI courses' or 'career advice'! 💡";
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! 👋 I'm VC Assistant, your AI learning companion. How can I help you today? Ask me about courses, career paths, certificates, or anything about Virtual Courses!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const quickQuestions = ["Recommend courses", "Career guidance", "How do certificates work?", "Show login credentials", "What's free?"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-3xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
            <FaRobot /> AI Chatbot Assistant
          </h1>
          <p className="text-sm text-muted-foreground">FAQs, Career Counseling & Course Support</p>
        </div>

        {/* Quick Questions */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {quickQuestions.map((q) => (
            <button key={q} onClick={() => { setInput(q); }} className="text-xs px-3 py-1.5 border border-border rounded-full hover:bg-muted transition-colors">
              {q}
            </button>
          ))}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-card rounded-xl vc-shadow p-4 overflow-y-auto mb-4 min-h-[400px] max-h-[500px]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 mb-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                {msg.role === "bot" ? <FaRobot className="w-4 h-4" /> : <FaUser className="w-4 h-4" />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                {msg.content.split("\n").map((line, j) => (
                  <p key={j} className="mb-1">
                    {line.split("**").map((part, k) =>
                      k % 2 === 1 ? <strong key={k}>{part}</strong> : <span key={k}>{part}</span>
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"><FaRobot className="w-4 h-4" /></div>
              <div className="bg-muted p-3 rounded-lg"><span className="text-sm animate-pulse">Typing...</span></div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me anything about courses, careers, or the platform..."
            className="flex-1 border border-input rounded-lg px-4 py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button onClick={sendMessage} disabled={!input.trim()} className="px-4 py-3 bg-primary text-primary-foreground rounded-lg disabled:opacity-50">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
