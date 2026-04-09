// VC LMS - Dummy Authentication System using localStorage
// Supports: student, educator, admin roles

export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "educator" | "admin";
  photoUrl: string;
  enrolledCourses: string[];
  wishlist: string[];
  completedModules: Record<string, string[]>; // courseId -> moduleIds
  quizScores: Record<string, { score: number; total: number; attempts: number }>;
  certificates: string[]; // courseIds with certificates
}

// Dummy users
const DUMMY_USERS: Record<string, { password: string; user: User }> = {
  "student@vc.com": {
    password: "student123",
    user: {
      id: "usr_student_01",
      name: "Alex Student",
      email: "student@vc.com",
      role: "student",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      enrolledCourses: ["course_1", "course_2", "course_5"],
      wishlist: ["course_3"],
      completedModules: {
        course_1: ["mod_1_1", "mod_1_2"],
        course_2: ["mod_2_1"],
      },
      quizScores: {
        course_1: { score: 8, total: 10, attempts: 2 },
      },
      certificates: ["course_1"],
    },
  },
  "educator@vc.com": {
    password: "educator123",
    user: {
      id: "usr_educator_01",
      name: "Dr. Sarah Educator",
      email: "educator@vc.com",
      role: "educator",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      enrolledCourses: [],
      wishlist: [],
      completedModules: {},
      quizScores: {},
      certificates: [],
    },
  },
  "admin@vc.com": {
    password: "admin123",
    user: {
      id: "usr_admin_01",
      name: "Admin VC",
      email: "admin@vc.com",
      role: "admin",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
      enrolledCourses: [],
      wishlist: [],
      completedModules: {},
      quizScores: {},
      certificates: [],
    },
  },
};

const STORAGE_KEY = "vc_current_user";

// Get stored user state (merges dummy + localStorage overrides)
function getStoredUser(): User | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function login(email: string, password: string): { success: boolean; user?: User; error?: string } {
  const entry = DUMMY_USERS[email.toLowerCase()];
  if (!entry) return { success: false, error: "User not found" };
  if (entry.password !== password) return { success: false, error: "Incorrect password" };

  // Check if we have a stored version of this user (preserving progress)
  const stored = getStoredUser();
  const user = stored && stored.email === email.toLowerCase() ? stored : { ...entry.user };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return { success: true, user };
}

export function logout(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser(): User | null {
  return getStoredUser();
}

export function updateUser(updates: Partial<User>): User | null {
  const user = getStoredUser();
  if (!user) return null;
  const updated = { ...user, ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function enrollInCourse(courseId: string): User | null {
  const user = getStoredUser();
  if (!user) return null;
  if (!user.enrolledCourses.includes(courseId)) {
    user.enrolledCourses.push(courseId);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function toggleWishlist(courseId: string): User | null {
  const user = getStoredUser();
  if (!user) return null;
  const idx = user.wishlist.indexOf(courseId);
  if (idx >= 0) user.wishlist.splice(idx, 1);
  else user.wishlist.push(courseId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function completeModule(courseId: string, moduleId: string): User | null {
  const user = getStoredUser();
  if (!user) return null;
  if (!user.completedModules[courseId]) user.completedModules[courseId] = [];
  if (!user.completedModules[courseId].includes(moduleId)) {
    user.completedModules[courseId].push(moduleId);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function saveQuizScore(courseId: string, score: number, total: number): User | null {
  const user = getStoredUser();
  if (!user) return null;
  const existing = user.quizScores[courseId];
  user.quizScores[courseId] = {
    score: Math.max(score, existing?.score || 0),
    total,
    attempts: (existing?.attempts || 0) + 1,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function earnCertificate(courseId: string): User | null {
  const user = getStoredUser();
  if (!user) return null;
  if (!user.certificates.includes(courseId)) {
    user.certificates.push(courseId);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}
