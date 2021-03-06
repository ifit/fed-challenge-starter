import React from 'react';
import Workouts from "./Workouts"
import CardTimeDetails from "./CardTimeDetails"
import CardHeader from "./CardHeader"

import { Card } from 'semantic-ui-react'

const Widget = React.memo( (props) => {
  
  const { data: { qty, name, title, distance, timer }, isActive } = props  
  const openWidget = qty && <Workouts qty={ qty } />
  
  return (
    <Card >
      <div className="card-image">
        <img  src={`/images/${name}-thumb.jpg`} alt="thumb-img" />
        { openWidget }      
      </div>
      <Card.Content>
        <CardHeader title={title} name={name} />
        { !qty && <CardTimeDetails timer={timer} distance={distance}/> }
      </Card.Content>
      {
        
        // Selects clicked item
        isActive && <Card.Content extra className={isActive && "transition"}>
          VIEW DETAILS
        </Card.Content>
      }
    </Card>
  );

}, (prev, next) => {
  if (prev !== next) return false
  return true
})

export default Widget