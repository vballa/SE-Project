import React from "react"

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class PopulateCalendar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            startDate:new Date(),
            EventName:null,
            Type:null
        }
    }
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     changeHandler(Event)
     {
        if(Event.target.name==="EventVal")
        {
            this.setState({EventName:Event.target.value});
        }
        else if(Event.target.name==="HWVal")
        {
            this.setState({Type:Event.target.value});
        }
     }
     submitHandler(Event)
     {
         alert("submitting");
     }
    render()
    {
        return(<div>
            <head>
                <title>Populate Academic Calendar</title>
            </head>
            <body>
                <form action="http://localhost:8002/" name="Registration Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                    <h>Populate Academic Calendar</h><br/>
                    Date:<DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)} name="DateVal"/><br/>
                    Event:<input type="text" name="EventVal" onChange={this.changeHandler.bind(this)}/><br/>
                    H/W:<input type="text" name="HWVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
export default PopulateCalendar
