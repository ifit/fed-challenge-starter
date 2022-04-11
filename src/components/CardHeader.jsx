import React from "react";

import { Card } from 'semantic-ui-react'

export default ({ title, name }) => {
  
  return (
    <Card.Header>
      <div>
        {title}
      </div> 
      <div>
        <img src={`/images/${name}-trainer.jpg`} alt="trainer-img"/>
      </div>
    </Card.Header>
  )
}