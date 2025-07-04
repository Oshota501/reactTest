import React from "react";
function Button2({c0,c1,add,stateNum,num}){
    const [flag,state] = React.useState(true);
    const style1 = {
        color : (function(){
            if(flag){
                return c0 ;
            }else{
                return c1 ;
            }
        })() ,
    }
    return (
        <button 
            style={style1}
            onClick={()=>{
            state(!flag);
            stateNum(num+add);
        }}>
            add {add}

        </button>
    );
}

export const Test = () => {
    const title: string = "test";
    const [num,stateNum] = React.useState(0);
    
    return (
        <div className="Test">
            <h1>{title}</h1>
            <p>
                {num}
            </p>
            <Button2 c0="red" c1="green" add={1} stateNum={stateNum} num={num}/>
            <Button2 c0="red" c1="green" add={10} stateNum={stateNum} num={num}/>
            <Button2 c0="red" c1="green" add={100} stateNum={stateNum} num={num}/>
            <Button2 c0="red" c1="green" add={-1} stateNum={stateNum} num={num}/>
            <Button2 c0="red" c1="green" add={-10} stateNum={stateNum} num={num}/>
            <Button2 c0="red" c1="green" add={-100} stateNum={stateNum} num={num}/>

            <a href="../">
                <button>MainPage</button>
            </a>
        </div>
    );
}
