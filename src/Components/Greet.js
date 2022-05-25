import React from "react";
// const Greet = (props)=>{
//     return(
//         <div>
//         <h1>Hello {props.name} a.k.a {props.nickName}</h1>
//         {props.children}
//         </div>
        

//     )
//}
//------------------------------------------------------------------------------------------------
// by destructing the props
// const Greet = ({name, nickName})=>{
//  return( 
//      <div>
//     <h1>Hello {name} a.k.a {nickName}</h1>
//     </div>
// )}  

//------------------------------another way of destructuring the props------------------------------------
const Greet = (props)=>{
    const {name, nickName} = props
    return(
        <div>
        <h1>Hello {name} a.k.a {nickName}</h1>
        </div>
    )
}
export default Greet