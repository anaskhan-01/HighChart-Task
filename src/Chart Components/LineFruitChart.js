import React, { useState, useEffect } from 'react';
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts'
import '../App.css';

const LineChart = () => {
  const [options, setOptions] = useState();
  useEffect(() => {
    fetch('http://localhost:4000/api/line').then(res => res.json()).then(data => setOptions(data));
  }, [setOptions]);
  return (
    <div className="singlecontainer">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default LineChart;
