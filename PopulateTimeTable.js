import React from "react"
class PopulateTimeTable extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null,
            Hour:null,
            SCode:null,
            SName:null,
            Location:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="FIDVal")
        {
            this.setState({FID:Event.target.value});
        }
        else if(Event.target.name==="HourVal")
        {
            this.setState({Hour:Event.target.value});
        }
        else if(Event.target.name==="SubjectVal")
        {
            this.setState({SCode:Event.target.value});
        }
        else if(Event.target.name==="SubjectNameVal")
        {
            this.setState({SName:Event.target.value});
        }
        else if(Event.target.name==="LocationVal")
        {
            this.setState({Loaction:Event.target.value});
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
                <title>Populate Faculty TimeTable</title>
            </head>
            <body>
                <form action="http://localhost:8003" name="Populate TimeTable Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                    <h>Populate Faculty TimeTable</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Hour:<input type="text" name="HourVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Subject Code:<input type="text" name="SubjectVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Subject Name:<input type="text" name="SubjectNameVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Location:<input type="text" name="LocationVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
export default PopulateTimeTable
