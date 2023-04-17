import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';

const ColumnAgeChart = () => {
  const [options, setOptions] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/api/columnage').then(res => res.json()).then(data => setOptions(data));
  }, [setOptions]);

  return (
    <div className='singlecontainer'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnAgeChart;
