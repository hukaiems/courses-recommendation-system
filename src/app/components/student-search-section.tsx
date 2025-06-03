"use client";
import { useState } from "react";
import {
  Search,
  User,
  ChevronDown,
  ChevronUp,
  BookOpen,
  School,
  Users,
  Hash,
} from "lucide-react";
import axios from "axios";

// Define the type for student API data
interface Student {
  id: string;
  name: string;
  gender: number;
  school: string;
  course_order: string; // This is a string like "{C_697791,C_682183}"
}

// Define the type for recommended courses API response
interface RecommendedCoursesResponse {
  [courseId: string]: number; // courseId -> precision score
}

// Define the type for a recommended course item
interface RecommendedCourse {
  id: string;
  precision: number;
}

function StudentSearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(
    null
  );
  const [recommendedCourses, setRecommendedCourses] = useState<
    RecommendedCourse[]
  >([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);

  // Toggle expanded state for a student
  const toggleRecommendedCourses = async (studentId: string) => {
    if (expandedStudentId === studentId) {
      setExpandedStudentId(null);
      setRecommendedCourses([]);
    } else {
      setExpandedStudentId(studentId);
      await getRecommendedCourses();
    }
  };

  // Helper function to parse course order string
  const parseCourseOrder = (courseOrderString: string): string[] => {
    if (!courseOrderString || typeof courseOrderString !== "string") {
      return [];
    }

    // Remove curly braces and split by comma
    const cleaned = courseOrderString.replace(/[{}]/g, "").trim();
    if (!cleaned) {
      return [];
    }

    return cleaned
      .split(",")
      .map((course) => course.trim())
      .filter((course) => course.length > 0);
  };

  // Helper function to get gender display text
  const getGenderDisplay = (gender: number) => {
    switch (gender) {
      case 0:
        return { text: "Female", color: "bg-pink-100 text-pink-700" };
      case 1:
        return { text: "Male", color: "bg-blue-100 text-blue-700" };
      default:
        return { text: "Other", color: "bg-gray-100 text-gray-700" };
    }
  };

  // Function to get recommended courses from local API
  const getRecommendedCourses = async () => {
    setLoadingRecommendations(true);
    try {
      const topK = 10; // Number of recommendations to fetch

      // Parse userId to number with validation
      const userIdNum = Math.floor(Math.random() * 100);

      const requestBody = {
        user_id: userIdNum,
        top_k: topK,
      };

      console.log("Sending request to recommend API:", requestBody);

      const response = await axios.post<RecommendedCoursesResponse>(
        `https://9ae1-1-55-40-249.ngrok-free.app/recommend`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Received response:", response.data);

      // Convert the response object to an array (already sorted from API)
      const coursesArray: RecommendedCourse[] = Object.entries(
        response.data
      ).map(([courseId, precision]) => ({
        id: courseId,
        precision: precision,
      }));

      setRecommendedCourses(coursesArray);
    } catch (error) {
      console.error("Error getting recommended courses:", error);
      if (axios.isAxiosError(error)) {
        console.error("Response status:", error.response?.status);
        console.error("Response data:", error.response?.data);
        console.error("Request data:", error.config?.data);
      }
      setRecommendedCourses([]);
    } finally {
      setLoadingRecommendations(false);
    }
  };

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
      // params placed below the URL
      const response = await axios.get(
        `https://cs313-api-be31.onrender.com/user?name=${searchQuery}`
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
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          {students.length > 0 ? (
            <>
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <p className="text-gray-700">
                  Found{" "}
                  <span className="font-bold text-blue-600">
                    {students.length}
                  </span>{" "}
                  students matching &ldquo;
                  <span className="font-bold text-gray-900">{searchQuery}</span>
                  &rdquo;
                </p>
              </div>

              <ul className="divide-y divide-gray-100">
                {students.map((student) => {
                  const genderInfo = getGenderDisplay(student.gender);
                  const courseOrder = parseCourseOrder(student.course_order);

                  return (
                    <li
                      key={student.id}
                      className="p-6 hover:bg-gray-50/50 transition-all duration-200"
                    >
                      {/* Main Student Info Row */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                            <User size={20} />
                          </div>
                        </div>

                        {/* Student basic info */}
                        <div className="flex-grow min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            {student.name}
                          </h3>

                          {/* Student Details Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* School */}
                            <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                              <School
                                size={16}
                                className="text-emerald-600 flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-medium text-emerald-700 uppercase tracking-wide">
                                  School
                                </p>
                                <p
                                  className="text-sm font-semibold text-emerald-900 truncate"
                                  title={student.school}
                                >
                                  {student.school}
                                </p>
                              </div>
                            </div>

                            {/* Gender */}
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                              <Users
                                size={16}
                                className="text-gray-600 flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                                  Gender
                                </p>
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${genderInfo.color}`}
                                >
                                  {genderInfo.text}
                                </span>
                              </div>
                            </div>

                            {/* Course Order */}
                            <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                              <Hash
                                size={16}
                                className="text-amber-600 flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-medium text-amber-700 uppercase tracking-wide">
                                  Course Order
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {courseOrder.length > 0 ? (
                                    <>
                                      {courseOrder
                                        .slice(0, 4)
                                        .map((courseId, index) => (
                                          <span
                                            key={index}
                                            className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full"
                                            title={courseId}
                                          >
                                            {courseId.replace("C_", "")}
                                          </span>
                                        ))}
                                      {courseOrder.length > 4 && (
                                        <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-200 text-amber-700 text-xs font-bold rounded-full">
                                          +{courseOrder.length - 4}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <span className="text-xs text-amber-600 italic">
                                      No courses assigned
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommended courses with toggle functionality */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => toggleRecommendedCourses(student.id)}
                          className="flex items-center justify-between px-4 py-3 text-left bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg transition-all duration-200 border border-blue-100 w-full md:w-auto min-w-[250px]"
                          disabled={loadingRecommendations}
                        >
                          <span className="font-medium text-gray-700 flex items-center gap-2">
                            <BookOpen size={16} className="text-blue-600" />
                            {loadingRecommendations &&
                            expandedStudentId === student.id
                              ? "Loading..."
                              : "Recommended Courses"}
                          </span>
                          {expandedStudentId === student.id ? (
                            <ChevronUp size={20} className="text-gray-600" />
                          ) : (
                            <ChevronDown size={20} className="text-gray-600" />
                          )}
                        </button>

                        {/* Expandable course list */}
                        {expandedStudentId === student.id && (
                          <div className="mt-3 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                            <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Top Recommendations
                            </h4>

                            {loadingRecommendations ? (
                              <div className="flex items-center justify-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                              </div>
                            ) : recommendedCourses.length > 0 ? (
                              <ul className="space-y-2">
                                {recommendedCourses.map((course, index) => (
                                  <li
                                    key={course.id}
                                    className="flex items-center justify-between text-sm p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                                        {index + 1}
                                      </div>
                                      <BookOpen
                                        size={16}
                                        className="text-blue-500 group-hover:text-blue-600 transition-colors"
                                      />
                                      <span className="text-gray-900 font-medium">
                                        Course ID: {course.id}
                                      </span>
                                    </div>
                                    <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                      Score: {course.precision.toFixed(3)}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="text-center py-4">
                                <p className="text-gray-500 text-sm">
                                  No recommendations available
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
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
