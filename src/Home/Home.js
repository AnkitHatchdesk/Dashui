import React from 'react';
import RevenueCard from '../Revenue/RevenueCard';
import Task from '../Task/Task';
import TaskStatus from '../TaskStatus/TaskStatus';

function Home() {
  return (
    <div className="container">
      <RevenueCard />
      <TaskStatus />
      <Task />
    </div>
  );
}

export default Home;
