import React from 'react';
import Grid from '@material-ui/core/Grid'
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';

//Icons
import { IoMdStopwatch } from 'react-icons/io';
import { TiArrowLoop } from 'react-icons/ti'
import { MdPlaylistPlay } from 'react-icons/md'

//css
import './Card.css'


export default function MediaCard(props) {

    return (
        <Grid>

            <Card className={props.active === 'active' ? 'card-container active' : 'card-container'}
            >
                <div className='header-img-container'>
                    <CardImg
                        top width="100%"
                        className='header-img'
                        src={props.headerImage}
                        alt={props.title}
                        title={props.title}
                    />
                    <div className={props.type === 'series' ? 'series-overlay' : 'hide'}>
                        <h3>{props.workouts}</h3>
                        <p>workouts</p>
                        <MdPlaylistPlay className='series-icon' />
                    </div>
                </div>
                <CardBody className='card-body-container'>
                    <div className='title-container'>
                        <CardTitle className="card-title">{props.title}</CardTitle>
                        <img src={props.trainer} alt='trainer headshot' />
                    </div>
                    <div className={props.type === 'class' ? 'subtitle' : 'hide'}>
                        <IoMdStopwatch /> {props.time} <TiArrowLoop />
                        {props.distance} M
                    </div>
                    <Button className={props.active === 'active' ? '' : 'hide'}>
                        View Details </Button>
                </CardBody>
            </Card>
        </Grid>
    );
}
