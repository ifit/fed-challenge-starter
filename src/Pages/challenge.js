import MyCard from "../components/Card/cardui.js";
import React, { Component } from "react";
import LakeInniscarra from "../Assets/images/lake-inniscarra-thumb.jpg"
import { faClock, faEye,faList } from "@fortawesome/free-solid-svg-icons";
import LakeTrainer from "../Assets/images/lake-inniscarra-trainer.jpg"
import boatRace from "../Assets/images/charles-race-thumb.jpg"
import RaceTrainer from "../Assets/images/charles-race-trainer.jpg"
import fullbodyhiit from"../Assets/images/full-body-hiit-thumb.jpg"
import fullbodytrainer from"../Assets/images/full-body-hiit-trainer.jpg"
import performance from "../Assets/images/performance-series-thumb.jpg"
import performancetrainer from "../Assets/images/performance-series-trainer.jpg"
import ned from "../Assets/images/20-minutes-to-toned-thumb.jpg"
import nedtrainer from "../Assets/images/20-minutes-to-toned-trainer.jpg"
import kafue from "../Assets/images/kafue-river-thumb.jpg"
import kafuetrainer from "../Assets/images/kafue-river-trainer.jpg"
import shred from "../Assets/images/shred-and-burn-thumb.jpg"
import shredtrainer from "../Assets/images/shred-and-burn-trainer.jpg"
import pulls from "../Assets/images/slow-pulls-thumb.jpg"
import pullstrainer from "../Assets/images/slow-pulls-trainer.jpg"






import "./challenge.css"
function Cards() {
    return (
      <div id="bg">
              <MyCard
              id="card1"
                imgsrc={LakeInniscarra}
                title="Lake Inniscarra, Ireland Pyramid"
                viewDetails="View Details"
                icon={faClock}
                time="30:53"
                viewsicon={faEye}
                views="6248"
                tinyImg={LakeTrainer}
                

              ></MyCard>
               <MyCard
               id="card2"
                imgsrc={boatRace}
                title="Charles Race, Boston Massachusetts"
               
                icon={faClock}

                time="36:22"
                viewsicon={faEye}
                views="8648"
                tinyImg={RaceTrainer}

              ></MyCard>
          
              <MyCard
               id="card7"
                imgsrc={kafue}
                title="Kafue River Zambia - Power Stroke Pyramid"
               
                icon={faClock}
                time="30:05"
                viewsicon={faEye}
                views="4660"
                tinyImg={kafuetrainer}

              ></MyCard>
                <MyCard
               id="card8"
                imgsrc={pulls}
                title="Slow Pulls and Fast Intervals"
             
                icon={faClock}
                time="44:13"
                viewsicon={faEye}
                views="9948"
                tinyImg={pullstrainer}

              ></MyCard>

                      <MyCard
                      id="card3"
                imgsrc={fullbodyhiit}
                title="Full Body HIIT Series"
               listicon={faList}
               playlistnumber="12"
                tinyImg={fullbodytrainer}

              ></MyCard>
               <MyCard
               id="card4"
                imgsrc={performance}
                title="Performance Series"
                listicon={faList}
               playlistnumber="09"
                tinyImg={performancetrainer}

              ></MyCard>
              <MyCard
               id="card5"
                imgsrc={ned}
                title="20 minutes to toned"
                listicon={faList}
               playlistnumber="12"
                tinyImg={nedtrainer}

              ></MyCard>
              <MyCard
               id="card6"
                imgsrc={shred}
                title="Shred and Burn"
                listicon={faList}
               playlistnumber="16"
                tinyImg={shredtrainer}

              ></MyCard>
   </div>
    )}
  
  export default Cards;