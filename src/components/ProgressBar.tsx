// VC LMS - Progress Bar Component
import React from "react";

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  size?: "sm" | "md";
}

const ProgressBar = ({ value, label, size = "md" }: ProgressBarProps) => {
  const height = size === "sm" ? "h-1.5" : "h-2.5";
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted-foreground">{label}</span>
          <span className="font-medium">{value}%</span>
        </div>
      )}
      <div className={`w-full bg-muted rounded-full ${height} overflow-hidden`}>
        <div
          className={`bg-primary ${height} rounded-full transition-all duration-500`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
