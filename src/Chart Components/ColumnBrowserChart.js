import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';
import '../App.css';

drilldown(Highcharts);

const ColumnChart = () => {
  const [options, setOptions] = useState();
  useEffect(() => {
    fetch('http://localhost:4000/api/column').then(res => res.json()).then(data => setOptions(data));
  }, [setOptions]);
  return (
    <div className='singlecontainer'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      /></div>
  );
};


export default ColumnChart;
