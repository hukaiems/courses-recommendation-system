"use client";
import { useState } from "react";
import {
  Search,
  User,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";
import axios from "axios";

// define the type for student API data
interface Student {
  id: string;
  name: string;
}

function StudentSearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(
    null
  );

  // Filter students based on search query
  // const students = mockStudents.filter(
  //   (student) =>
  //     student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     student.email.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // Toggle expanded state for a student
  const toggleRecommendedCourses = (studentId: string) => {
    if (expandedStudentId === studentId) {
      setExpandedStudentId(null);
    } else {
      setExpandedStudentId(studentId);
    }
  };

  // Mock recommended courses - later on will be API
  const getRecommendedCourses = () => [
    { id: 1, title: "Advanced JavaScript Patterns", duration: "6 weeks" },
    { id: 2, title: "React Native Fundamentals", duration: "8 weeks" },
    { id: 3, title: "Data Structures & Algorithms", duration: "10 weeks" },
    { id: 4, title: "UX Design Principles", duration: "4 weeks" },
    { id: 5, title: "Cloud Architecture", duration: "12 weeks" },
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) {
      console.log("Empty query—nothing to search");
      setShowResults(false);
      return;
    }
    console.log("Searching for:", query);
    try {
      // params place below the URL
      const response = await axios.get(
        "https://cs313-backend.onrender.com/api/get_student_by_name",
        {
          params: { query: query },
        }
      );
      // remember to set response.data.data to get to the array
      setStudents(response.data.data);
      setShowResults(true);
    } catch (err) {
      console.log("Error getting student: ", err);
      setStudents([]);
      setShowResults(true);
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-black">Find Students</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative w-1/5 text-black">
          <input
            type="text"
            placeholder="Search by student name"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value === "") {
                setShowResults(false);
              }
            }}
          />
          <Search size={20} className="absolute left-3 top-3.5 text-gray-400" />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results List */}
      {showResults && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {students.length > 0 ? (
            <>
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <p className="text-gray-700">
                  Found <span className="font-bold">{students.length}</span>{" "}
                  students matching &ldquo;
                  <span className="font-bold">{searchQuery}</span>&rdquo;
                </p>
              </div>

              <ul className="divide-y divide-gray-200">
                {students.map((student) => (
                  <li
                    key={student.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative text-black">
                        <User />
                      </div>

                      {/* Student basic info */}
                      <div className="flex-grow">
                        <h3 className="font-bold text-black">{student.name}</h3>
                      </div>

                      {/* Course count and action button */}
                      <div className="flex flex-col items-center gap-2 ml-4">
                        <div className="text-center">
                          {/* keeping the code for later on if I needed it */}
                          {/* <div className="font-bold text-lg text-blue-600">
                            {student.courses}
                          </div> */}
                          <div className="text-xs text-gray-500">Courses</div>
                        </div>
                        <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded font-medium transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>

                    {/* Recommended courses with toggle functionality */}
                    <div className="mt-4">
                      <div className="w-1/5">
                        <button
                          onClick={() => toggleRecommendedCourses(student.id)}
                          className="w-1/2 flex items-center justify-between w-full text-left px-4 py-2 text-black bg-blue-200/60 hover:bg-gray-300 rounded transition-colors"
                        >
                          <span className="font-medium">
                            Recommended Courses
                          </span>
                          {expandedStudentId === student.id ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      {/* Expandable course list */}
                      {expandedStudentId === student.id && (
                        <div className="mt-2 w-full bg-gray-50 rounded p-3 border border-gray-200 animate-slideDown">
                          <h4 className="text-sm font-bold text-xl text-gray-700 mb-2">
                            Top Recommendations
                          </h4>
                          <ul className="space-y-2">
                            {getRecommendedCourses().map((course) => (
                              <li
                                key={course.id}
                                className="flex items-center justify-between text-sm p-2 hover:bg-white rounded-md"
                              >
                                <div className="flex items-center">
                                  <BookOpen
                                    size={16}
                                    className="mr-2 text-blue-500"
                                  />
                                  <span className="text-black">
                                    {course.title}
                                  </span>
                                </div>
                                <span className="text-gray-500">
                                  {course.duration}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No Students Found
              </h3>
              <p className="text-gray-500">
                Try a different search term or check spelling
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StudentSearchSection;
