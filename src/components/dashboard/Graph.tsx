import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../loader';

const Graph = () => {
  const [index, setIndex] = useState(0);

  const { data, isLoading, isError } = useQuery(['line'], async () => {
    const response = await axios.get(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    return response.data;
  });

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const casesData = Object.entries(data.cases).map(([date, cases]) => ({
    date,
    cases,
    deaths: data.deaths[date],
    recovered: data.recovered[date],
  }));
  const subArrays = [];
  for (let i = 0; i < casesData.length; i += 50) {
    subArrays.push(casesData.slice(i, i + 50));
  }

  return (
<div className="bg-white mx-auto shadow-md xs:w-full md:w-[80vw] rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl capitalize font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight flex text-center justify-center items-center mb-2">
        cases fluctuations
      </h2>
      <div className="xs:w-full md:w-[75vw] mx-auto  ">
        <ResponsiveContainer width="100%" aspect={1.5}>
          <LineChart
            data={subArrays[index]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="deaths" stroke="#eb4034" />
            <Line type="monotone" dataKey="cases" stroke="#ebe534" />
            <Line type="monotone" dataKey="recovered" stroke="#34eb37" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="my-2 flex justify-center items-center mx-auto">
        <button
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === 22}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default Graph;
