import React from "react";
import PopulateTimeTable from "./PopulateTimeTable";
class ViewTimeTable extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="FIDVal")
        {
            this.setState({FID:Event.target.value});
        }
     }
     submitHandler(Event)
     {
        alert("submitting!");
     }
    render()
    {
        return(<div>
            <head>
                <title>View Faculty TimeTable</title>
            </head>
            <body>
                <form action="http://localhost:8004" name="Registration Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                    <h>View Faculty TimeTable</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
//add button to allow download of timetable
export default ViewTimeTable
