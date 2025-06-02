"use client";

import { useEffect, useState } from "react";
import MissingData from "./visualization-graph/missing-data";
import ConsistencyChart from "./visualization-graph/consistency";
import TopCourseCharts from "./visualization-graph/top-courses";
import TopFieldsCharts from "./visualization-graph/top-fields";
import axios from "axios";

// define api json overall data

const defaultOverallData = {
  course: 0,
  teacher: 0,
  field: 0,
  school: 0,
  user: 0,
  user_course: 0,
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
      case "TopFields":
        return <TopFieldsCharts />;
      default:
        return null;
    }
  };

  // get overall data
  useEffect(() => {
    const fetchOverallData = async () => {
      try {
        const response = await axios.get(
          "https://cs313-api-be31.onrender.com/summary"
        );
        // errors because API give array of so take the first one
        console.log("<- API trả về:", response.data);
        setOverallData(response.data.table_counts);
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
          <h3 className="text-gray-600 font-bold">Courses</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.course}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Teacher</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.teacher}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">Field</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.field}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">School</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.school}
          </p>
        </div>

        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">User</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.user}
          </p>
        </div>

        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-gray-600 font-bold">User course</h3>
          <p className="text-2xl font-bold text-black">
            {overallData.user_course}
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

        <button
          className={`px-4 py-2 rounded-t-md text-black ${
            activeTab === "TopFields" ? "bg-white font-bold" : "bg-blue-200"
          }`}
          onClick={() => setActiveTab("TopFields")}
        >
          Top Fields
        </button>
      </div>

      {/* Chart visualization area */}
      <div className="bg-white p-6 rounded-md shadow flex-grow">
        {renderActiveChart()}
      </div>
    </div>
  );
}
