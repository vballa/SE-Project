import React from "react"
class AdminLogin extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            AID:null,
            Password:null
        }
        this.changeHandler.bind(this);
    }
     changeHandler(Event)
     {
        if(Event.target.name==="AIDVal")
        {
            this.setState({AID:Event.target.value});
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
                <title>Admin Login</title>
            </head>
            <body>
                <form action="http://localhost:8001/" name="Faculty Login Page" method="GET" onSubmit={this.submitHandler.bind(this)}>
                    <h>Admin Login</h><br/>
                    Admin ID:<input type="text" name="AIDVal" onChange={this.changeHandler.bind(this)}/><br/>
                    Password:<input type="text" name="PasswordVal" onChange={this.changeHandler.bind(this)}/><br/>
                    <input type="submit" text="SUBMIT"/>
                    <input type="reset" text="RESETVAL"/>
                </form>
            </body>
        </div>)
    }
}
export default AdminLogin
