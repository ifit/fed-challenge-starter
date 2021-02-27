import React,{Component} from 'react'
import menuSVG from '../../assets/images/menu.svg'
import backbtnSVG from '../../assets/images/backbtn.svg'
import logoSVG from '../../assets/images/logo.svg'
import searchbtnSVG from '../../assets/images/searchbtn.svg'
import newvideoSVG from '../../assets/images/newvideo.svg'
import appsSVG from '../../assets/images/apps.svg'
import notificationsSVG from '../../assets/images/notifications.svg'
import "./header.css"

export default class Header extends React.Component{
    render(){
        return(
            <header className={`top ${this.props.headerAdditionalClass}`}>
                <button onClick={this.props.onSearchBtnClick} className="back_btn">
                    <img src={backbtnSVG} alt="menu"></img>
                </button>
                {/* <button class="menu" >
                    <img src={menuSVG} alt="menu"></img>
                </button> */}
                <button class="logo">
                    {/* <img src={logoSVG} alt="menu"></img> */}
                    <img data-piio="https://cdn.ifit.com/img/ifit_logo_blue_white.svg" src="https://pcdn.piiojs.com/i/lacqh4/imgv,20201218/https%3A%2F%2Fcdn.ifit.com%2Fimg%2Fifit_logo_blue_white.svg" alt="iFit" data-piio-id="641"></img>
                </button>

                <div class="search">
                    <input type="text" name="search" placeholder="Search"/>
                    <button class="search_btn">
                    <img src={searchbtnSVG} alt="menu"></img>
                    </button>
                </div>
                <button onClick={this.props.onSearchBtnClick} class="search_btn">
                <img src={searchbtnSVG} alt="menu"></img>
                </button>

                <button class="new_video">
                <img src={newvideoSVG} alt="menu"></img>
                </button>
                <button class="apps">
                <img src={appsSVG} alt="menu"></img>
                </button>

                <button class="notifications">
                <img src={notificationsSVG} alt="menu"></img>
                </button>

                <button class="user_avatar">
                    <img src="https://image.flaticon.com/icons/svg/145/145843.svg" width="224" height="224" alt="Man free icon" title="Man free icon"/>
                </button>    
        </header>
        )
    }
}