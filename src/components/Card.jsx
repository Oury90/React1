import React from "react";
import contacts from "./contact";
import Data from "./Data";
import Profile from "./Profile";


function Card(){
    return <div>
        <h1>My Contact</h1>
        <Profile profile="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_1280.jpg"/>
        <div className="card-container">
       <Data 
        name={contacts[0].name}
        image={contacts[0].imgUrl}
        tel={contacts[0].phone}
        email={contacts[0].email}
       />
       <Data 
        name={contacts[1].name}
        image={contacts[1].imgUrl}
        tel={contacts[1].phone}
        email={contacts[1].email}
       />
       <Data 
        name={contacts[2].name}
        image={contacts[2].imgUrl}
        tel={contacts[2].phone}
        email={contacts[2].email}
       />
       </div>
    </div>
}
export default Card;