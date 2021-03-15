import React from 'react';
import WorkoutTileTop from './WorkoutTileTop';
import WorkoutTileBottom from './WorkoutTileBottom';

const WorkoutTile = props => {
  const { name, title, time, dist, workouts } = props.data;
  const { active } = props;

  const hoverTile = e => {
    e.target.closest('.workoutTile').classList.add('moveActive');
  }

  const leaveTile = e => {
    e.target.closest('.workoutTile').classList.remove('moveActive');
  }

  return(
    <div 
      className={`${active ? 'active' : ''}`} onMouseEnter={e => hoverTile(e)} 
      onMouseLeave={e => leaveTile(e)} 
    >
      <WorkoutTileTop name={name} workouts={workouts} />
      <WorkoutTileBottom 
        title={title}
        time={time}
        dist={dist}
        name={name}
        active={active} 
      />

    </div>
  )
}

export default WorkoutTile;