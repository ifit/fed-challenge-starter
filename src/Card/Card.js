import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

//Icons
import { IoMdStopwatch } from 'react-icons/io';

import { TiArrowLoop } from 'react-icons/ti'


export default function MediaCard(props) {

    return (

        <Card>
            <CardImg
                top width="100%"
                className='headerImg'
                src={props.headerImage}
                alt={props.title}
                title={props.title}
            />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <img src={props.trainer} alt='trainer headshot' />
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <IoMdStopwatch /> {props.time} <TiArrowLoop />{props.distance}
                </CardSubtitle>
                <Button size="large" color="primary">
                    View Details
        </Button>
            </CardBody>
        </Card>
    );
}
