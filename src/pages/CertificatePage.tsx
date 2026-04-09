// VC LMS - Certificate Page with Verification Link
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseById } from "@/lib/courses";
import { FaCertificate, FaDownload, FaLink } from "react-icons/fa";
import { toast } from "sonner";

const CertificatePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const course = getCourseById(courseId || "");

  if (!user || !course || !user.certificates.includes(course.id)) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Certificate not found or not earned yet.</p>
          <button onClick={() => navigate("/profile")} className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Go to Profile</button>
        </div>
      </div>
    );
  }

  const certId = `VC-${course.id.toUpperCase()}-${user.id.slice(-6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
  const verifyUrl = `${window.location.origin}/verify/${certId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(verifyUrl);
    toast.success("Verification link copied!");
  };

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Certificate */}
        <div className="bg-card rounded-xl vc-shadow-lg p-8 md:p-12 max-w-2xl w-full text-center border-4 border-foreground/10">
          <div className="border-2 border-foreground/20 rounded-lg p-8 md:p-12">
            <FaCertificate className="w-12 h-12 text-vc-yellow mx-auto mb-4" />
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Certificate of Completion</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Virtual Courses</h1>
            <div className="w-24 h-0.5 bg-foreground/20 mx-auto my-4" />
            <p className="text-muted-foreground">This is to certify that</p>
            <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
            <p className="text-muted-foreground mt-4">has successfully completed the course</p>
            <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
            <p className="text-sm text-muted-foreground mt-4">
              Instructor: {course.instructor} • Duration: {course.duration}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">Certificate ID: {certId}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button onClick={copyLink} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm flex items-center gap-2">
            <FaLink /> Copy Verification Link
          </button>
          <button onClick={() => window.print()} className="px-4 py-2 border border-border rounded-lg text-sm flex items-center gap-2">
            <FaDownload /> Print Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
