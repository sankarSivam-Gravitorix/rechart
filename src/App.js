import React from "react";
import SimpleLineChart from "./LineChart 1";

import MonthlySalesBarChart from "./BarChart 1";
import CustomPieChart from "./PieChart 1";
import ComplexLineChart from "./LineChart 2";
import ComplexBarChart from "./BarChart 2";
import TwoLevelPieChart from "./PieChart 2";

function App() {
  return (
    <div className="App">
      <SimpleLineChart/>
      <ComplexLineChart/>
      <MonthlySalesBarChart/>
      <ComplexBarChart/>
      <CustomPieChart/>
      <TwoLevelPieChart/>
    </div>
  );
}

export default App;
