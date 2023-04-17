import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';

const AreaRainfall = () => {
  const [options, setOptions] = useState();
  useEffect(() => {
    fetch('http://localhost:4000/api/area').then(res => res.json()).then(data => setOptions(data));
  }, [setOptions]);

  return (
    <div className='singlecontainer' >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default AreaRainfall;
