import React from 'react';
import './App.css';
import PieChart from './Chart Components/PieBrowserchart';
import ColumnChart from './Chart Components/ColumnBrowserChart';
import LineChart from './Chart Components/LineFruitChart';
import ColumnAgeChart from './Chart Components/ColumnAgeChart';
import BarAgeChart from './Chart Components/BarAgeChart';
import SplineTempChart from './Chart Components/SplineAtmosphereTempertaureChart';
import AreaRainfall from './Chart Components/AreaRainfallChart';
import StackBarSalesChart from './Chart Components/StackBarSalesChart';

const DashboardChart = () => {

  return (
    <div className='container'>
      <ColumnAgeChart />
      <BarAgeChart />
      <PieChart />
      <ColumnChart />
      <LineChart />
      <SplineTempChart />
      <AreaRainfall />
      <StackBarSalesChart />
    </div>
  );
};

export default DashboardChart;
