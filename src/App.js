import React, { useState } from 'react';
import './App.css';
import CardTile from './Card/Card'


//Header Photos 
import lakeInniscarraThumb from './images/lake-inniscarra-thumb.jpg'
import performanceSeriesThumb from './images/performance-series-thumb.jpg'
import slowPullsThumb from './images/slow-pulls-thumb.jpg'
import minutesTonedThumb from './images/20-minutes-to-toned-thumb.jpg'
import charlesRaceThumb from './images/charles-race-thumb.jpg'
import fullBodyHiitThumb from './images/full-body-hiit-thumb.jpg'
import kafueRiverThumb from './images/kafue-river-thumb.jpg'
import shredAndBurnThumb from './images/shred-and-burn-thumb.jpg'

//Trainer Photos
import lakeInniscarraTrainer from './images/lake-inniscarra-trainer.jpg'
import performanceSeriesTrainer from './images/performance-series-trainer.jpg'
import slowPullsTrainer from './images/slow-pulls-trainer.jpg'
import minutesTonedTrainer from './images/20-minutes-to-toned-trainer.jpg'
import charlesRaceTrainer from './images/charles-race-trainer.jpg'
import fullBodyHiitTrainer from './images/full-body-hiit-trainer.jpg'
import kafueRiverTrainer from './images/kafue-river-trainer.jpg'
import shredAndBurnTrainer from './images/shred-and-burn-trainer.jpg'


function App() {

  let [activeCard, setActiveCard] = useState('inactive')

  let handleActive = (cardId) => {
    setActiveCard(cardId)
  }

  return (
    <div className='card-deck'>
      <div onClick={() => handleActive(1)}>
        <CardTile
          active={activeCard === 1 ? 'active' : 'inactive'}
          headerImage={lakeInniscarraThumb}
          title='Lake Inniscarra, Ireland &mdash; Pyramid'
          trainer={lakeInniscarraTrainer}
          time='30:53'
          distance='6,248'
          type='class'
        />
      </div>

      <div onClick={() => handleActive(2)}>
        <CardTile
          active={activeCard === 2 ? 'active' : 'inactive'}
          headerImage={performanceSeriesThumb}
          title='Performance Series'
          trainer={performanceSeriesTrainer}
          type='series'
          workouts={9}

        />
      </div>


      <div onClick={() => handleActive(3)}>
        <CardTile
          active={activeCard === 3 ? 'active' : 'inactive'}
          headerImage={slowPullsThumb}
          title='Slow Pulls and Fast Intervals'
          trainer={slowPullsTrainer}
          time='44:13'
          distance='9,948'
          type='class'
        />
      </div>

      <div onClick={() => handleActive(4)}>

        <CardTile
          active={activeCard === 4 ? 'active' : 'inactive'}

          headerImage={minutesTonedThumb}
          title='20 Minutes to Toned'
          trainer={minutesTonedTrainer}
          type='series'
          workouts={12}

        />
      </div>

      <div onClick={() => handleActive(5)}>

        <CardTile
          active={activeCard === 5 ? 'active' : 'inactive'}

          headerImage={charlesRaceThumb}
          title='Charles Race, Boston, Massachusetts'
          trainer={charlesRaceTrainer}
          time='36:22'
          distance='8,648'
          type='class'
        />
      </div>

      <div onClick={() => handleActive(6)}>

        <CardTile
          active={activeCard === 6 ? 'active' : 'inactive'}
          headerImage={fullBodyHiitThumb}
          title='Full-Body HIIT Series'
          trainer={fullBodyHiitTrainer}
          type='series'
          workouts={12}

        />
      </div>

      <div onClick={() => handleActive(7)}>

        <CardTile
          active={activeCard === 7 ? 'active' : 'inactive'}

          headerImage={kafueRiverThumb}
          title='Kafue River, Zambia  &mdash; Power Stroke Pyramid'
          trainer={kafueRiverTrainer}
          time='22:22'
          distance='4,660'
          type='class'
        />
      </div>

      <div onClick={() => handleActive(8)}>

        <CardTile
          active={activeCard === 8 ? 'active' : 'inactive'}
          headerImage={shredAndBurnThumb}
          title='Shred & Burn Series'
          trainer={shredAndBurnTrainer}
          type='series'
          workouts={16}
        />
      </div>

    </div>

  );
}

export default App;
