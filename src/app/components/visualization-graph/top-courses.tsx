import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

interface Course {
  id: string;
  user_count: number;
}

type CoursesResponse = Course[];

const TopCourseCharts = () => {
  const [courses, setCourses] = useState<CoursesResponse>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://cs313-backend.onrender.com/api/student_count_on_course"
        );
        setCourses(response.data.data);
      } catch (err) {
        console.log("Failed to fetch courses data: ", err);
        window.alert("Failed to get information on charts");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  //   set loading
  if (loading) {
    return <p>Loading top courses...</p>;
  }

  const colors = [
    "#3182CE",
    "#2B6CB0",
    "#2C5282",
    "#63B3ED",
    "#4299E1",
    "#3182CE",
    "#2B6CB0",
    "#90CDF4",
    "#63B3ED",
    "#4299E1",
  ];

  //   define top 10 courses
  const topCourses = courses.slice(0, 10);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        Top Courses by Enrollment
      </h2>
      <p className="text-gray-500 mb-6">
        Showing the most popular courses based on student enrollment
      </p>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topCourses}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="id"
              angle={-45}
              textAnchor="end"
              height={70}
              tick={{ fill: "#4A5568", fontSize: 12 }}
            />
            <YAxis 
              tick={{ fill: '#4A5568' }}
              axisLine={{ stroke: '#000' }}
              tickLine={{ stroke: '#E2E8F0' }}
              label={{ 
                value: 'Number of Students', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#4A5568' },
                dx: -15
              }}
              domain={[0, 'dataMax + 50']}
              padding={{ top: 20 }}
              tickCount={6}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              height={36}
              formatter={() => "Student Enrollment"}
              wrapperStyle={{ color: "#000" }}
            />
            <Bar
              dataKey="user_count"
              name="Student Enrollment"
              radius={[4, 4, 0, 0]}
            >
              {courses.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-right">
        Last updated: May 20, 2025
      </div>
    </div>
  );
};

export default TopCourseCharts;
