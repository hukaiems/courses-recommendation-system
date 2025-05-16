'use client'
import {ArrowRight} from "lucide-react";
import recommendedCourses from "../../data/recommended-courses.json";
import popularCourses from "../../data/popular-courses.json";
import StudentSearchSection from "./student-search-section";

// Component for Main Page content with beautiful design
function RecommendationTab() {
  
  return (
    <div className="flex flex-col bg-white px-4 py-6 min-h-screen">

      {/* student Search sections */}
      <StudentSearchSection />

      {/* Recommended Courses */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-black">Your Top Recommended Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Course thumbnail */}
              <div className="relative text-black">
                <div className="absolute top-2 right-2 bg-white text-blue-500 text-xs px-2 py-1 rounded font-medium">
                  {course.level}
                </div>
              </div>
              
              {/* Course details */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-black">{course.name} </h3>
                <p className="text-gray-500 text-sm mb-3">By {course.instructor}</p>
                <div className="bg-blue-500 text-white text-xs w-1/6 rounded-sm flex justify-center py-1">
                  {course.enrolled}+ Students
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-gray-600 text-sm ml-1">{course.rating}</span>
                  </div>
                  <span className="font-bold text-blue-600">{course.price}</span>
                </div>
                
                <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded font-medium transition-colors">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Courses */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Most Popular Courses</h2>
          <a href="#" className="text-blue-600 text-sm font-medium flex items-center hover:underline">
            View All <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Course thumbnail */}
              <div className="relative text-black">
                {course.tag && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {course.tag}
                  </div>
                )}
              </div>
              
              {/* Course details */}
              <div className="p-4">
                <h3 className="font-bold mb-1 text-black">{course.name}</h3>
                <p className="text-gray-500 text-sm mb-2">By {course.instructor}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★★★★★</span>
                    <span className="text-gray-600 text-xs ml-1">{course.rating}</span>
                  </div>
                  <span className="font-bold text-blue-600">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default RecommendationTab;