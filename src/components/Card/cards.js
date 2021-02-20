import React, {Component} from "react"
import Yoda from "../../assets/yoda.jpeg"
import MyCard from "./cardui"
import "./style.css"


class MyCards extends Component{
    render() {
        return (
            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <MyCard imgsrc={Yoda} title="project1">      
                        </MyCard>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCards