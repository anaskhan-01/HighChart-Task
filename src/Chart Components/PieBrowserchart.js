import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';
import '../App.css';

drilldown(Highcharts);

const Piechart = () => {
  const [options, setOptions] = useState();
  useEffect(() => {
    fetch('http://localhost:4000/api/pie').then(res => res.json()).then(data => setOptions(data));
  }, [setOptions]);

  return (
    <div className='singlecontainer'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};


export default Piechart;
