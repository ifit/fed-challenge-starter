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

    console.log(props.active)

    return (
        <Grid item>

            <Card className={props.active === 'active' ? 'card-container active' : 'card-container'}
            >
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
                    <div className={props.type === 'class' ? 'subtitle' : 'hide'}>
                        <IoMdStopwatch /> {props.time} <TiArrowLoop /> {props.distance}
                    </div>
                    <Button className={props.active === 'active' ? '' : 'hide'}>
                        View Details </Button>
                </CardBody>
            </Card>
        </Grid>

    );
}
