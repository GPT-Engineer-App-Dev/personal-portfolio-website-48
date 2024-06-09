import React from 'react';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Link } from 'react-router-dom';

const mockData = {
  attendance: [
    { year: '2018', attendees: 50000 },
    { year: '2019', attendees: 75000 },
    { year: '2020', attendees: 100000 },
    { year: '2021', attendees: 120000 },
    { year: '2022', attendees: 150000 },
  ],
  demographics: [
    { name: 'LGBTQ+', value: 60 },
    { name: 'Allies', value: 40 },
  ],
  events: [
    { year: '2018', events: 20 },
    { year: '2019', events: 25 },
    { year: '2020', events: 30 },
    { year: '2021', events: 35 },
    { year: '2022', events: 40 },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PrideWeekGraphs = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" mb={8}>
        <Link to="/">Home</Link>
      </Box>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Pride Week in London - Statistics</Heading>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>Attendance Over the Years</Heading>
          <BarChart width={600} height={300} data={mockData.attendance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendees" fill="#8884d8" />
          </BarChart>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>Demographic Breakdown</Heading>
          <PieChart width={400} height={400}>
            <Pie
              data={mockData.demographics}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {mockData.demographics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>Number of Events Over the Years</Heading>
          <LineChart width={600} height={300} data={mockData.events}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="events" stroke="#8884d8" />
          </LineChart>
        </Box>
      </VStack>
    </Container>
  );
};

export default PrideWeekGraphs;