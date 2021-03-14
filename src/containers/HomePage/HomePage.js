import React,{Component} from 'react'
import Header from '../../components/Header/Header'
import VideoGrid from '../../components/VideoGrid/VideoGrid';
export default class HomePage extends React.Component{
    state={
        headerAdditionalClass:""
    }

    onSearchBtnClick = () => {
        console.log("ssss");
        const {headerAdditionalClass} = this.state;
        let header = headerAdditionalClass;
        if(headerAdditionalClass === 'search_active'){
            header="";
        }else{
            header="search_active";
        }

        this.setState({
            headerAdditionalClass: header
        })
    }

    render(){
        return(
            <div class = "wrapper">
                <Header onSearchBtnClick={this.onSearchBtnClick} headerAdditionalClass={this.state.headerAdditionalClass}/>
                <VideoGrid headerTitle="Recommended"/>
            </div>
        )
    }
}