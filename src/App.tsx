import { useEffect, useState } from "react";
import "./styles.css";

import "react-json-view-lite/dist/index.css";

import { defaultStyles, JsonView } from "react-json-view-lite";
import { ChartComponent } from "./ChartComponent";
import { generateVibrationData, VibrationSeriesType } from "./generateData";
export default function App() {
  const [vibrationData, setVibrationData] = useState<VibrationSeriesType>();
  useEffect(() => {
    const data = generateVibrationData();
    setVibrationData(data);
  }, []);
  if (!vibrationData) {
    return <div>"Initializing"</div>;
  }
  return (
    <div className="App">
    
      <h3>3d Plotting of Vibration Data</h3>
      <span>
        <b>Raw data:</b>
        <i>To be plotted on a 3D chart </i>
      </span>
      <div className="sample-data">
        <JsonView
          data={vibrationData}
          shouldInitiallyExpand={(level) => level === 0}
          style={defaultStyles}
        />
      </div>
      <div className="chart">
        <ChartComponent data={vibrationData} />
      </div>
    </div>
  );
}
