import react from 'react';
export default class Sample extends react.Component{

    constructor(){
        super();
        this.state={
            name:"hhhhHH"
        }
    }
    getName(){
        return "bbb";

    }
    render(){
        return(
            <p> {this.state.name} </p>
        )
    }
}