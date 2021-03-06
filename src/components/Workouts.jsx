import React from "react";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export default ({ qty }) => {
  return (
    <div className="workouts">
      <div> { qty } </div>
      <div> Workouts </div>
      <div> <MenuOpenIcon fontSize="large" /> </div>
    </div> 
  )
}