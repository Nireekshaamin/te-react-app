import React from "react";

import '../Styles/Functional.css';

function FunctionalComponent()
{
 return(
    <h4><FunctionalComponent2></FunctionalComponent2><FunctionalComponent1></FunctionalComponent1></h4>
 )
}
function FunctionalComponent1()
{
 return(
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kapu_Beach_Lighthouse_.jpg/2560px-Kapu_Beach_Lighthouse_.jpg" height={350} width={450} className="image"/>
 )
}

const FunctionalComponent2=()=>{
    return(
        <h3 style={{marginLeft:"20px",marginTop:"20px"}}>Welcome to Udupi</h3>
    )
}

const FunctionalComponent3=()=>{
    return(
        <div>
        <p>I AM THE FOURTH FUNCTIONAL COMPONENT ENCLOSED IN DIV TAG</p>
        <p>I AM THE FOURTH FUNCTIONAL COMPONENT ENCLOSED IN DIV TAG</p>
        </div>
    )
}



export default FunctionalComponent;