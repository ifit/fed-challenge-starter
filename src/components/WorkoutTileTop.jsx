import React from 'react';

const WorkoutTileTop = props => {
  const { name, workouts} = props;
  return (
    <div className="top">
      <img src={`/images/${name}-thumb.jpg`}  alt=""/>
      {
        workouts && 
        (
          <React.Fragment>
            <div className="overlay"></div>
            <div className="workoutList">
              <h4>{workouts}</h4>
              <span>workouts</span>
              <img src="/images/icn_playlist.svg" alt=""/>
            </div>
          </React.Fragment>
        )
      }
    </div>
  )
}

export default WorkoutTileTop;