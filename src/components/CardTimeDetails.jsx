import React from "react"

import { Card } from 'semantic-ui-react'
import TimerIcon from '@material-ui/icons/Timer';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';


export default ({ timer, distance }) => {
  
  return (
    <Card.Meta>
      <TimerIcon fontSize="small" />
        <span className='date'>{timer}</span>
      <AllInclusiveIcon fontSize="small" />
        <span className='date'>{distance}</span>
    </Card.Meta>
  )
}