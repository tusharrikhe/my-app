import React from "react";
const Hello = ()=>{
    // return <h1> Hello Kanu</h1>
    return React.createElement('div', null  , React.createElement('h1', {className : 'myClass'},"Hello Kanu"))
}
export default Hello
