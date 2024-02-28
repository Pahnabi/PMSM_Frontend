import React, { useState, useEffect } from "react";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
} from "react-vis";
import "react-vis/dist/style.css";
import "./Current.css";

function Current() {
  const initialDummyData = [
    { current: 5, timestamp: "2024-02-28 12:00:00" },
    { current: 7, timestamp: "2024-02-28 12:10:00" },
    { current: 3, timestamp: "2024-02-28 12:20:00" },
    { current: 9, timestamp: "2024-02-28 12:30:00" },
    { current: 6, timestamp: "2024-02-28 12:40:00" },
  ];

  // State hook to manage top data
  const [topData, setTopData] = useState(initialDummyData);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:5000/current-data")
        .then((response) => response.json())
        .then((data) => {
          setTopData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 10000); // 10 seconds

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Convert timestamp strings to Date objects
  const dataForChart = topData.map((item) => ({
    x: new Date(item.timestamp),
    y: item.current,
  }));

  return (
    <div className="current-page">
      <h1>Top 5 Real-Time Data</h1>
      <div className="chart-container">
        <XYPlot xType="time" width={800} height={400}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis
            title="Time"
            style={{
              text: {
                fontSize: "12px",
                fontWeight: "bold",
                transform: "rotate(-45deg)",
                textAnchor: "end",
              },
            }}
          />
          <YAxis title="Current" />
          <LineSeries data={dataForChart} />
        </XYPlot>
      </div>
    </div>
  );
}

export default Current;
