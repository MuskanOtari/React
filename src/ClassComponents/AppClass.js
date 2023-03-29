import { Component } from "react";
import FunctionCompo from "../Component/FunctionCompo";
import ClassCompo from "../Component/ClassCompo";
//using class component
class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            functionClick: false,
            classClick: false
        }
    }

    render() {
        return (
            <>
            <div className="btnD">
            <button className="btn" onClick={()=>this.setState( {functionClick: !this.state.functionClick })}>To see styling in function component</button>
            <button className="btn" onClick={()=>this.setState( {classClick: !this.state.classClick })}>To see styling in class component</button>
            </div>
            <div className="combinedDiv">
            {this.state.functionClick ? <FunctionCompo/>:null}
            {this.state.classClick ? <ClassCompo/>:null}
            </div>
            </>

        )
    }
}

export default AppClass