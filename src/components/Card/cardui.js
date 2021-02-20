import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MyCard = (props) => {
  return (
    <div className="card text-center">
      <div classname="overflow">
        <img src={props.imgsrc} alt="cardimg" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <img src={props.tinyImg} alt="tinyImg" id="tinyImg"/>
        <p className="card-text text-secondary">
        <FontAwesomeIcon id="icon" icon={props.icon} />
        <p id="time">{props.time}</p>
        <FontAwesomeIcon id="viewsicon" icon={props.viewsicon} />
        <p id="views">{props.views}</p>
        <FontAwesomeIcon id="listIcon" icon={props.listicon} />
        <p id="listtext">{props.playlistnumber}</p>
        
        <a href={props.activeLink} className="moreDetails">
              {props.viewDetails}
            </a>
        </p>
      </div>
    </div>
  );
};

export default MyCard;
