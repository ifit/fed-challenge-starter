import React from 'react';
import Grid from '@material-ui/core/Grid'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

//Icons
import { IoMdStopwatch } from 'react-icons/io';

import { TiArrowLoop } from 'react-icons/ti'

//css
import './Card.css'


export default function MediaCard(props) {

    return (
        <Grid item>

            <Card className='card-container'>
                <CardImg
                    top width="100%"
                    className='header-img'
                    src={props.headerImage}
                    alt={props.title}
                    title={props.title}
                />
                <CardBody className='card-body-container'>
                    <div className='title-container'>
                        <CardTitle className="card-title">{props.title}</CardTitle>
                        <img src={props.trainer} alt='trainer headshot' />
                    </div>
                    <CardSubtitle className="subtitle">
                        <IoMdStopwatch /> {props.time} <TiArrowLoop />{props.distance}
                    </CardSubtitle>
                    <Button size="large" color="primary">
                        View Details
        </Button>
                </CardBody>
            </Card>
        </Grid>

    );
}
