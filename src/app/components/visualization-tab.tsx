"use client";

import { useState } from "react";
import MissingData from "./visualization-graph/missing-data";
import ConsistencyChart from "./visualization-graph/consistency";

// Main Visualization Component
export default function VisualizationTab() {
  const [activeTab, setActiveTab] = useState("missing");

  // Render the active chart based on the selected tab
  const renderActiveChart = () => {
    switch (activeTab) {
      case "missing":
        return <MissingData />;
      case "consistency":
        return <ConsistencyChart />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-blue-100 p-4 h-screen">
      {/* Stats summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Total Courses</h3>
          <p className="text-2xl font-bold text-black">3000</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Active Students</h3>
          <p className="text-2xl font-bold text-black">23400</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Completion rates</h3>
          <p className="text-2xl font-bold text-black">76%</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Average exercise</h3>
          <p className="text-2xl font-bold text-black">56%</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b pb-2 mb-4">
        <button
          className={`px-4 py-2 rounded-t-md text-black ${
            activeTab === "missing" ? "bg-white font-bold" : "bg-blue-200"
          }`}
          onClick={() => setActiveTab("missing")}
        >
          Completeness
        </button>
        <button
          className={`px-4 py-2 rounded-t-md text-black ${
            activeTab === "consistency" ? "bg-white font-bold" : "bg-blue-200"
          }`}
          onClick={() => setActiveTab("consistency")}
        >
          Consistency
        </button>
      </div>

      {/* Chart visualization area */}
      <div className="bg-white p-6 rounded-md shadow flex-grow">
        {renderActiveChart()}
      </div>
    </div>
  );
}
