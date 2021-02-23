import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import styles from '../card.module.scss'


const Cards = (props) => {
    return(
        <Card onClick={props.customOnClick} id="fonts" className={props.activeStyle} style={{maxHeight: "300px",width: "290px", borderRadius: "5px"}}>
            <div className="image" style={{height: "165px", maxWidth: "290px" }}>
                <img src={props.thumbs}/>
                <div className={props.series}>
                    <p className={styles.text}>{props.seriesAmount}<br />
                        <p className={styles.textworkout}>{props.seriesText}<br />
                        <Icon style={{margintop: "4px"}} name="bars"/>
                        </p>
                    </p>
                </div>
            </div>
            <Card.Content >
            <Image src={props.trainer} floated='right' spaced='right' style={{height: "25px", width: "25px"}}/>
                <Card.Header id="fonts">{props.workout}{props.dash}</Card.Header>
                <Card.Header id="fonts">{props.locate}</Card.Header>
                <Card.Header id="fonts" style={{paddingTop: "10px", fontSize: "10px"}}>
                    <Icon disabled name={props.watch}/>
                    <span style={{paddingRight: "5px"}} className='date'>{props.time}</span>
                    <Icon disabled name={props.track}/>
                    <span className='date'>{props.miles}</span>
                </Card.Header>
                <Card.Description style={{height: "50px", maxWidth: "290px", color: "blue" }} id="fonts">
                    {props.activeText}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default Cards