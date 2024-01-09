import React from "react";

const siZing = {
    width: "100px",
    height: "100px"
}

function Profile(props){
    return   <img src={props.profile} alt="" style={siZing} className="content-img"/>

}
export default Profile;