// VC LMS - Reels-Style Micro-Learning Page
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { COURSES } from "@/lib/courses";
import { FaChevronUp, FaChevronDown, FaHeart, FaShare, FaBookmark } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const allReels = COURSES.flatMap((course) =>
  course.reels.map((reel) => ({ ...reel, courseTitle: course.title, courseThumbnail: course.thumbnail, courseId: course.id }))
);

const ReelsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, allReels.length - 1));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  if (allReels.length === 0) {
    return (
      <div className="min-h-screen bg-primary">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh] text-primary-foreground">
          <p>No reels available yet. Check back soon!</p>
        </div>
      </div>
    );
  }

  const reel = allReels[currentIndex];

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100vh-64px)] relative">
        {/* Reel Content */}
        <div className="w-full max-w-md h-full flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="flex-1 flex flex-col items-center justify-center p-4"
            >
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 bg-foreground/10">
                <iframe
                  src={reel.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={reel.title}
                />
              </div>
              <h3 className="font-bold text-lg text-center">{reel.title}</h3>
              <p className="text-sm opacity-70 mt-1">{reel.courseTitle}</p>
              <span className="text-xs opacity-50 mt-1">{reel.duration}</span>
            </motion.div>
          </AnimatePresence>

          {/* Side Actions */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <button
              onClick={() => { const s = new Set(liked); s.has(reel.id) ? s.delete(reel.id) : s.add(reel.id); setLiked(s); }}
              className="flex flex-col items-center gap-1"
            >
              <FaHeart className={`w-6 h-6 ${liked.has(reel.id) ? "text-destructive" : ""}`} />
              <span className="text-xs">{liked.has(reel.id) ? "Liked" : "Like"}</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <FaBookmark className="w-5 h-5" />
              <span className="text-xs">Save</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <FaShare className="w-5 h-5" />
              <span className="text-xs">Share</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-3">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center disabled:opacity-30">
              <FaChevronUp />
            </button>
            <span className="flex items-center text-sm opacity-70">{currentIndex + 1}/{allReels.length}</span>
            <button onClick={handleNext} disabled={currentIndex === allReels.length - 1} className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center disabled:opacity-30">
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsPage;
