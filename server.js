const express = require("express");
const {
  ColumnAgeChartHandler,
  pieBrowserChartHandler,
  areaRainfallChartHandler,
  barAgeChartHandler,
  columnBrowserChartHandler,
  LineFruitChartHandler,
  SplineTempChartHandler,
  StackBarSalesChartHandler,
} = require("./handlers");

const app = express();
const port = 4000;

// use cors as middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/columnage", ColumnAgeChartHandler);
app.get("/api/pie", pieBrowserChartHandler);
app.get("/api/area", areaRainfallChartHandler);
app.get("/api/bar", barAgeChartHandler);
app.get("/api/column", columnBrowserChartHandler);
app.get("/api/line", LineFruitChartHandler);
app.get("/api/spline", SplineTempChartHandler);
app.get("/api/stackbar", StackBarSalesChartHandler);

// app.get('/api/pie', (req, res) => {Handler)

// app.get('/api/area', (req, res) => {Handler)

// app.get('/api/bar', (req, res) => {Handler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
