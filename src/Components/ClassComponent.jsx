import React from "react";
import FuncComp from '../Components/Functional';
import '../Styles/Class.css';
//class component

class ClassComponent extends React.Component{
    render(){
        return(
            <h3 style={{color:"lightblue"}}><FuncComp></FuncComp>Udupi<ClassComponent1></ClassComponent1></h3>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h4 style={{marginTop:"20px",fontSize:"25px"}}>&nbsp;Udupi is a coastal town in Karnataka, most famous for its vegetarian cuisine and South Indian restaurants all over the country. With beautifully carved ancient temples, laidback beaches and unexplored forests, Udupi is also the place where the educational hub of Manipal is located. Situated 60 km from Mangalore, Udupi is famous for its temple culture and beautiful beaches.<FunctionalComponent></FunctionalComponent></h4>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>Surrounded by the Arabian Sea on one side and the Western ghats on the other, a ride through this district will bring you the best of both worlds. Being a holy town, one of the most important attractions here is the Krishna Temple.<h3 style={{marginTop:"40px",marginLeft:"20px"}}><FunctionalComponent4></FunctionalComponent4><FunctionalComponent6></FunctionalComponent6><FunctionalComponent7></FunctionalComponent7><FunctionalComponent10></FunctionalComponent10></h3> </h4>
 )
}


const FunctionalComponent4=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr >
                    <FunctionalComponent5></FunctionalComponent5>
                   
                </tr>
            </thead>
        </table>
    )
}


const FunctionalComponent5=()=>{
    return(
        <React.Fragment>
        <th>Tourist places</th>
        <th>Location</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
       
        </React.Fragment>
    )
}

const FunctionalComponent6=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr >
                    <FunctionalComponent8></FunctionalComponent8>
                </tr>
            </thead>
        </table>
    )
}



const FunctionalComponent8=()=>{
    return(
        <React.Fragment>
        <td>Sri Krishna Matt</td>
        <td style={{paddingRight:"35px"}}>Udupi</td>
        <td >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
       
        </React.Fragment>
    )
}

const FunctionalComponent7=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr  >
                    <FunctionalComponent9></FunctionalComponent9>
                </tr>
            </thead>
        </table>
    )
}



const FunctionalComponent9=()=>{
    return(
        <React.Fragment>
        <td >Malpe Beach</td>
        <td>Malpe</td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
       
        </React.Fragment>
    )
}
const FunctionalComponent10=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr >
                    <FunctionalComponent11></FunctionalComponent11>
                </tr>
            </thead>
        </table>
    )
}



const FunctionalComponent11=()=>{
    return(
        <React.Fragment>
        <td>Kaup Beach</td>
        <td>Kaup</td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
       
        </React.Fragment>
    )
}




export default ClassComponent;