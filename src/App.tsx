import style from "./AppV.module.css";


export const App = () => {
  const title: string = "Hello World!";
  let flag: boolean = false ;
  let css = function() {
    if(flag){
      return style.app;
    }else{
      return style.app2;
    }
  }
  function cssChange(){
    flag = !flag ;
  }
  return (
    <div className={css()}>
      <h1>{title}</h1>
      <button onClick={cssChange}>YES</button>
    </div>
  );

}
