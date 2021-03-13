import React, { useState } from 'react'
import Cards from './components/Cards'
import { Card } from 'semantic-ui-react'

import {cards} from './data/cards'

import styles from './card.module.scss'

function App() {
  const [appState, changeState] = useState({
    activeCard: null,
    cards: cards
  });

  function toggleActive(index) {
    changeState({ ...appState, activeCard: appState.cards[index] });
  }

  function toggleActiveStyles(index) {
    if(appState.cards[index] === appState.activeCard) {
      return styles.card
    } else {
      return ""
    }
  }

  function toggleActiveText(index) {
    if(appState.cards[index] === appState.activeCard) {
      return 'VIEW DETAILS'
    } else {
      return ""
    }
  }

  return (
      <div className="ui container" style={{width: "80%" }}>
          <Card.Group itemsPerRow={4}>
            {appState.cards.map((card, index) =>(
              <Cards
              customOnClick={() => {
                toggleActive(index);
              }}
              key={index}
              workout={card.workout} 
              dash={<>{card.dash}</>} 
              watch={card.watch} 
              track={card.track}
              locate={card.locate} 
              time={card.time} 
              miles={card.miles}
              thumbs={card.thumb}
              trainer={card.trainer}
              series={card.series}
              seriesText={card.seriesText}
              seriesAmount={card.seriesAmount}
              activeStyle={toggleActiveStyles(index)}
              activeText={toggleActiveText(index)} />
            ))}
        </Card.Group>
      </div>
  );
}

export default App;