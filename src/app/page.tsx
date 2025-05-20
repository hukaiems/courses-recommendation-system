"use client";

import { useState } from "react";
import VisualizationTab from "./components/visualization-tab";
import TeamSection from "./components/team";
import ProjectIntroductionSection from "./components/project-introduction-section";
import EnhancedHeroSection from "./components/enhanced-hero-section";
import RecommendationTab from "./components/recommendation-tab";

// Component for Main Page content with beautiful design
function MainPageContent() {
  return (
    <div className="flex flex-col bg-white px-4 py-6 min-h-screen">
      {/* Hero Section */}
      <div className="flex items-center justify-center">
        <EnhancedHeroSection />
      </div>

      <TeamSection />

      <ProjectIntroductionSection />

      {/* <MoocubexIntroduction/> */}
    </div>
  );
}

export default function DataVisualizationPage() {
  const [activeNavTab, setActiveNavTab] = useState("main");

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-blue-600 font-bold text-xl">E-</div>
            <div className="font-bold text-xl text-black">Study</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-gray-100/40 border-b rounded-xl">
          <button
            className={`px-6 py-3 font-medium ${
              activeNavTab === "main"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveNavTab("main")}
          >
            Main page
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeNavTab === "visualization"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveNavTab("visualization")}
          >
            Data Visualization
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeNavTab === "recommendation"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveNavTab("recommendation")}
          >
            Recommendation
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-26 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
            <span className="font-medium">Teacher_A</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {activeNavTab === "main" && <MainPageContent />}
      {activeNavTab === "visualization" && <VisualizationTab />}
      {activeNavTab === "recommendation" && <RecommendationTab />}
    </div>
  );
}
