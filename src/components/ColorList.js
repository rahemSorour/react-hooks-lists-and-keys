import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorelemt=colors.map((color)=>{
   return <h1 key={color} style={{color:color}}>{color}</h1>})


  return (
   <div>
     <h1>Top 5 CSS Colors</h1>
     <ol>{colorelemt}</ol>
     
    </div>
  
  )}


export default ColorList;
