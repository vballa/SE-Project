import React from "react"
class FacultyLogin extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FID:null,
            Password:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="FIDVal")
        {
            this.setState({FID:Event.target.value});
        }
        else if(Event.target.name==="PasswordVal")
        {
            this.setState({Password:Event.target.value});
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
                <title>Faculty Login</title>
            </head>
            <body>
                <form action="http://localhost:8000/" name="Faculty Login Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                    <h>Faulty Login</h><br/>
                    Faculty ID:<input type="text" name="FIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Password:<input type="text" name="PasswordVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit"text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
export default FacultyLogin
