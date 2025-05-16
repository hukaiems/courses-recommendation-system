import React from "react";
import { AlertCircle } from "lucide-react"; // Added missing import

export default function CorrelationHeatmap(): React.ReactElement {
  return (
    <div className="space-y-4">
      <iframe
        src="/heatmap_component.html" // Note: no "../" - start from public folder
        width="700"
        height="650"
        frameBorder="0"
      ></iframe>

      <div className="flex items-center p-3 bg-blue-50 rounded-md border-l-4 border-blue-500 md:w-1/2 w-full">
        <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
        <div className="font-semibold text-blue-800">
          T-test:
          <span className="font-bold"> t = -164.226, p = 0.00000</span>
          <p className="font-normal">
            Nếu <i>p</i> &lt; 0.05 → Có sự khác biệt đáng kể về số lượng khóa
            học đã hoàn thành giữa nam và nữ.
          </p>
        </div>
      </div>
    </div>
  );
}
