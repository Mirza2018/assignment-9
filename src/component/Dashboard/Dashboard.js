import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Customized, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = useLoaderData()
    const CustomizedRectangle = (props) => {
        const { formattedGraphicalItems } = props;
        // get first and second series in chart
        const firstSeries = formattedGraphicalItems[0];
        const secondSeries = formattedGraphicalItems[1];
      
        // render custom content using points from the graph
        return firstSeries?.props?.points.map((firstSeriesPoint, index) => {
          const secondSeriesPoint = secondSeries?.props?.points[index];
          const yDifference = firstSeriesPoint.y - secondSeriesPoint.y
      
          return (
            <Rectangle
              key={firstSeriesPoint.payload.name}
              width={10}
              height={yDifference}
              x={secondSeriesPoint.x - 5}
              y={secondSeriesPoint.y}
              fill={yDifference > 0 ? 'red' : yDifference < 0 ? 'green' : 'none'}
            />
          )
        })
      };

    return (
        <div>
            

            <h1>Dashboard</h1>
            <div>
                <h1>StackedBarChart</h1>
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
        </BarChart>


            </div>

            <div>
                <h1>TwoLevelPieChart</h1>
            <PieChart width={400} height={400}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
            </div>
  <div>
    <h1>CustomizedRectangleContent</h1>
    <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        <Customized component={CustomizedRectangle} />
      </LineChart></div>


      <div>
        <h1>SimpleRadarChart </h1> 
        <p>Revenue</p>
      <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="month" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="revenue"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
        
        </div>
        </div>

      


    );
};

export default Dashboard;