import React from "react";
import Profile from "./Profile";

function Data(props){
    return <div className="container">
    <div className="card">
    <div className="content-top">
        <h3>{props.name}</h3>
        <Profile profile={props.image}/>
    </div>
    <div className="body-card">
        <p className="tel"> {props.tel}</p>
        <p className="email">{props.email}</p>
    </div>
</div>
</div>
}
export default Data;