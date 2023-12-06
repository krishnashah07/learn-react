import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            
         userInfo:
         {
            name:"xyz",
            location:"ABC",

         },
        };
    }
 async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krishnashah07");
    const json = await data.json();

    this.setState(
        {
            userInfo:json,
        }
    );
    console.log(json);
}
 render()
 {
    return <div className="user-block">
    <h1>Name:{this.state.userInfo.name}</h1>
    
    
    <h2>Location:{this.state.userInfo.location}</h2>
    <h3>gmail:{this.props.contact}</h3>
    </div>
 }


}
export default UserClass;