import React from 'react';
import Grid from '@material-ui/core/Grid'

import './App.css';

import CardTile from './Card/Card'



//TO-DO
//Make reusable card component 
//import to app 
//add props for photos, title, times, distance
//add select functionality so 'View Details' only shows when state is active 

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
  return (


    <div className='card-deck'>
      <Grid container spacing={2} direction='row' justify='center' alignItems='center'>

        <CardTile
          headerImage={lakeInniscarraThumb}
          title='Lake Inniscarra, Ireland &mdash; Pyramid'
          trainer={lakeInniscarraTrainer}
          time='30:53'
          distance={6248}
        />


        <CardTile
          ///NEEDs OVERLAY ON IMAGE for 'workouts
          headerImage={performanceSeriesThumb}
          title='Performance Series'
          trainer={performanceSeriesTrainer}
        />

        <CardTile
          headerImage={slowPullsThumb}
          title='Slow Pulls and Fast Intervals'
          trainer={slowPullsTrainer}
          time='44:13'
          distance={9948}
        />

        <CardTile
          ///NEEDs OVERLAY ON IMAGE for 'workouts
          headerImage={minutesTonedThumb}
          title='20 Minutes to Toned'
          trainer={minutesTonedTrainer}
        />

        <CardTile
          headerImage={charlesRaceThumb}
          title='Charles Race, Boston, Massachusetts'
          trainer={charlesRaceTrainer}
          time='36:22'
          distance={8648}
        />

        <CardTile
          ///NEEDs OVERLAY ON IMAGE for 'workouts
          headerImage={fullBodyHiitThumb}
          title='Full-Body HIIT Series'
          trainer={fullBodyHiitTrainer}
        />

        <CardTile
          headerImage={kafueRiverThumb}
          title='Kafue River, Zambia  &mdash; Power Stroke Pyramid'
          trainer={kafueRiverTrainer}
          time='22:22'
          distance={4660}
        />

        <CardTile
          ///NEEDs OVERLAY ON IMAGE for 'workouts
          headerImage={shredAndBurnThumb}
          title='Shred & Burn Series'
          trainer={shredAndBurnTrainer}
        />

      </Grid>

    </div>

  );
}

export default App;
