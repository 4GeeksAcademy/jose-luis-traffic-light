import React, { useState } from "react";
import "../../styles/traffic.css"

function FavoriteColor() {
    
  const [sombraRed, setsombraRed] = useState("");
  const [sombraYellow, setsombraYellow] = useState("");
  const [sombraGreen, setsombraGreen] = useState("");

  function sombra(boton){
    if( boton == "red"){
        setsombraRed("10px 10px 10px 10px white")
        setsombraYellow("")
        setsombraGreen("")
    }
    if( boton == "yellow"){
        setsombraRed("")
        setsombraYellow("10px 10px 10px 10px white")
        setsombraGreen("")
    }
    if( boton == "green"){
        setsombraRed("")
        setsombraYellow("")
        setsombraGreen("10px 10px 10px 10px white")
    }
   
  }   

  return (
    <div className="container">
        <div className="botones">
      <button className="red" type="button"onClick={() => sombra("red")} 
      style={{boxShadow:sombraRed}}>
            
        </button>
        <button className="yellow" type="button"onClick={() => sombra("yellow")} 
      style={{boxShadow:sombraYellow}}>
            
        </button>
        <button className="green" type="button"onClick={() => sombra("green")} 
        style={{boxShadow:sombraGreen}}>
            
        </button>
        </div>
    </div>
    
  );
}
export default FavoriteColor;