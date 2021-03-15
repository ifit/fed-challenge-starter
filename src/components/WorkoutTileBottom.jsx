import React from 'react';

const WorkoutTileBottom = props => {
  const { title, time, dist, name, active} = props;
  return (
    <div className="bot">
      <div className="descript">
        <h3>{title}</h3>
        <div className="time-dist">
          { time && (
              <React.Fragment>
              <span><img src="/images/icn_timer_line.svg" alt="" className="timerIcon"/> {time}</span>
              </React.Fragment>
          )}
          { dist && (
            <React.Fragment>
              <span><img src="/images/icn_distance_line.svg" alt="" className="distIcon"/> {dist}</span>
            </React.Fragment>
          )
          }
        </div>
       { active && <a href="#"><span>View Details</span></a> }
      </div>
      <div className="thumb">
        <img src={`/images/${name}-trainer.jpg`} alt="" />
      </div>
    </div>
  )
}

export default WorkoutTileBottom;