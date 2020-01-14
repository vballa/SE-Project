import React from "react"

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class ViewCalendar extends React.Component{
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
     submitHandler(Event)
     {
         alert("submitting");
     }
    render()
    {
        return(<div>
            <head>
                <title>View Academic Calendar</title>
            </head>
            <body>
                <form action="http://localhost:8005" name="Registration Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                    <h>View Academic Calendar</h><br/>
                    Date:<DatePicker selected={this.state.startDate} onChange={this.handleChange.bind(this)} name="DateVal"/><br/>
                    <input type="submit" text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
export default ViewCalendar
