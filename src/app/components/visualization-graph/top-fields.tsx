import { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface Field {
  field: string;
  num_users: number;
}

type fieldsResponse = Field[];

const TopFieldsCharts = () => {
  const [fields, setfields] = useState<fieldsResponse>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchfields = async () => {
      try {
        const response = await axios.get(
          "https://cs313-api-be31.onrender.com/field/user-counts"
        );
        setfields(response.data.data);
        // console.log("<- API trả về:", response.data.data);
      } catch (err) {
        console.log("Failed to fetch fields data: ", err);
        window.alert("Failed to get information on charts");
      } finally {
        setLoading(false);
      }
    };
    fetchfields();
  }, []);

  //   set loading
  if (loading) {
    return <p className="text-black">Loading top fields...</p>;
  }

  //   define top 10 fields
  const topFields = fields.slice(0, 10);

  const COLORS = [
    "#8884d8",
    "#8dd1e1",
    "#82ca9d",
    "#a4de6c",
    "#d0ed57",
    "#ffc658",
    "#ff8042",
    "#ffbb28",
    "#d0ed57",
    "#82ca9d",
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="text-xl font-bold mb-4 text-black">
        Top 10 Fields by Users
      </h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={topFields}
            dataKey="num_users" 
            nameKey="field" 
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={({ field, percent }) =>
              `${field} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {topFields.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value: number) => value.toLocaleString()}
            separator=", Users: "
          />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ paddingLeft: 20 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopFieldsCharts;
