import React, { useState, useEffect } from 'react';
import './App.css';
import { workouts } from './data.js';
import WorkoutTile from './components/WorkoutTile';

function App() {
  const [active, updAct] = useState(workouts.map(() => false));

  const handleClick = ind => {
    let arr = [...active];
    arr.fill(false);
    arr[ind] = !arr[ind];
    updAct(arr);
  }

  const renderWorkouts = () => {
    return workouts.map((wrk, ind) => {
      return (
      <div 
        className="workoutTile" 
        onClick={() => handleClick(ind)}
      >
        <WorkoutTile 
          data={wrk} 
          key={ind} 
          active={active[ind]}
        />
      </div>
      )
    })
  }
  
  return (
    <section className="App container">
        { renderWorkouts() }
    </section>
  );
}

export default App;
