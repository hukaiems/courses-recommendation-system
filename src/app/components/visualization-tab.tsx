"use client";

import { useEffect, useState } from "react";
import MissingData from "./visualization-graph/missing-data";
import ConsistencyChart from "./visualization-graph/consistency";
import TopCourseCharts from "./visualization-graph/top-courses";
import axios from "axios";

// define api json overall data

const defaultOverallData = {
  user_count: 0,
  course_count: 0,
  school_count: 0,
  teacher_count: 0,
  field_count: 0,
};

type OverallData = typeof defaultOverallData;

// Main Visualization Component
export default function VisualizationTab() {
  const [overallData, setOverallData] =
    useState<OverallData>(defaultOverallData);
  const [activeTab, setActiveTab] = useState("missing");

  // Render the active chart based on the selected tab
  const renderActiveChart = () => {
    switch (activeTab) {
      case "missing":
        return <MissingData />;
      case "consistency":
        return <ConsistencyChart />;
      case "TopCourses":
        return <TopCourseCharts />;
      default:
        return null;
    }
  };

  // get overall data
  useEffect(() => {
    const fetchOverallData = async () => {
      try {
        const response = await axios.get(
          "https://cs313-backend.onrender.com/api/overall"
        );
        // errors because API give array of so take the first one
        setOverallData(response.data.data[0]);
      } catch (err) {
        console.log("Failed to get data: ", err);
      }
    };
    fetchOverallData();
  }, []);

  return (
    <div className="flex flex-col bg-blue-100 p-4 h-screen">
      {/* Stats summary */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Users</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.user_count}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Courses</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.course_count}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">School</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.school_count}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Teacher</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.teacher_count}
          </p>
        </div>

        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Field</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.field_count}
          </p>
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

        <button
          className={`px-4 py-2 rounded-t-md text-black ${
            activeTab === "TopCourses" ? "bg-white font-bold" : "bg-blue-200"
          }`}
          onClick={() => setActiveTab("TopCourses")}
        >
          Top Courses
        </button>
      </div>

      {/* Chart visualization area */}
      <div className="bg-white p-6 rounded-md shadow flex-grow">
        {renderActiveChart()}
      </div>
    </div>
  );
}
