import React, { Component } from 'react';
import "./video-grid.css";

const data =[
    {
        thumbnail:"https://source.unsplash.com/290x163/?new&zealand",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?1",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?2",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?3",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?4",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?15",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?6",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?7",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?8",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?9",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?10",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    ,
    {
        thumbnail:"https://source.unsplash.com/290x163/?11",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?15",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?6",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?7",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?8",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?9",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?10",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    },
    {
        thumbnail:"https://source.unsplash.com/290x163/?11",
        avatar:"https://image.flaticon.com/icons/svg/145/145843.svg",
        title:"Home - Day30 - Journey | 30 Days of Yoga With XMASS",
        channel:"Future World Videos",
        details:"2K views - 11 hours ago"
    }
]

export default class VideoGrid extends Component {
    state = {
        activeVideo: -1
    }

    onClickFunction = (idx) => {
        this.setState({activeVideo: -1})
    }

    renderVideo = (video,index) => {
        return (
            <div onClick={this.onClickFunction.bind(null,index)} className={`video${this.state.activeVideo === index ? 'selected':''}`} key ={index}>
                    <img class="thumbnail" src={video.thumbnail} alt="" />
                    <img class="avatar" src={video.avatar} width="224" height="224" alt="Man free icon" title="Man free icon" />
                    <p class="title">{video.title}</p>
                    <p class="channel">{video.channel}</p>
                    <p class="details">{video.details}</p>
                </div>
        )
    }
    render() {
        const {headerTitle} = this.props;
        return (
            <section class="videos">
                {headerTitle && <h2>{headerTitle}</h2>}
                {data.map(this.renderVideo)}
            </section>
        )
    }
}