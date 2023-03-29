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
            <button onClick={()=>this.setState( {functionClick: !this.state.functionClick })}>To see styling in class component</button>
            <button onClick={()=>this.setState( {classClick: !this.state.classClick })}>To see styling in class component</button>
                {this.state.functionClick ? <FunctionCompo/>:null}
                {this.state.classClick ? <ClassCompo/>:null}
            </>

        )
    }
}

export default AppClass