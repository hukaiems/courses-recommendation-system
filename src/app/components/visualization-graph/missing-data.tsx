import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle } from "lucide-react";

const missingDataRates = [
  { field: "year_of_birth", rate: 98.542771 },
  { field: "name", rate: 0.001621 },
  { field: "gender", rate: 0.001621 },
  { field: "school", rate: 0.001621 },
];

const MissingData = () => (
  <div className="space-y-4">
    <h1 className="font-bold text-xl text-black">Completeness</h1>
    <h2 className="font-semi-bold text-lg text-black">
      Dữ liệu bị thiếu trong input
    </h2>
    <div className="h-64 text-black">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={missingDataRates}
          margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="field" width={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey="rate" name="Tỷ lệ dữ liệu thiếu (%)" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-3">
        <div className="flex items-center p-3 bg-blue-50 rounded-md border-l-4 border-blue-500 w-1/4">
          <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="font-semibold text-blue-800">
            Số dòng có hơn 2 trường thiếu: <span className="font-bold">54</span>
          </h2>
        </div>

        <div className="flex items-center p-3 bg-blue-50 rounded-md border-l-4 border-blue-500 w-1/4">
          <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="font-semibold text-blue-800">
            Tỷ lệ dữ liệu thiếu trong data là{" "}
            <span className="font-bold">12.32 %</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default MissingData;
