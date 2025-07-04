import style from "./AppV.module.css";
import React from "react";

export const App = () => {
  const title: string = "Hello World!";
  const [flag ,state] = React.useState(false);
  let css = function() {
    if(flag){
      return style.app;
    }else{
      return style.app2;
    }
  }
  function cssChange(){
    state(!flag) ;
  }
  const Btn1name = ["Yes","No"][(function(){
    if(flag){
      return 0 ;
    }else{
      return 1 ;
    }
  })()];
  return (
    <div className={css()}>
      <h1>{title}</h1>
      <button onClick={cssChange}>{Btn1name}</button>
      <a href="./test">
        <button>TestPage</button>
      </a>
    </div>
  );

}
