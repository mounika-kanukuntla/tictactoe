import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const App = () => {
    let [value1, setvalue1] = useState(null);
    let [value2, setvalue2] = useState(null);
    let [value3, setvalue3] = useState(null);
    let [value4, setvalue4] = useState(null);
    let [value5, setvalue5] = useState(null);
    let [value6, setvalue6] = useState(null);
    let [value7, setvalue7] = useState(null);
    let [value8, setvalue8] = useState(null);
    let [value9, setvalue9] = useState(null);
   function final() {
    if((value1==="x" && value2==="x" && value3==="x" )||(value4==="x" && value5==="x" && value6==="x" )||(value7==="x" && value8==="x" && value9==="x" )||(value1==="x" && value4==="x"&& value7==="x" )||(value3==="x" && value6==="x" && value9==="x" )||(value2==="x" && value5==="x" && value8==="x" )||(value3==="x" && value5==="x"&&value7==="x" )||(value1==="x" && value5==="x" && value9==="x" ))
    {
      alert("x wins")
    }
    else if((value1==="o" && value2==="o" && value3==="o" )||(value4==="o" && value5==="o" && value6==="o" )||(value7==="o" && value8==="o" && value9==="o" )||(value1==="o" && value4==="o"&& value7==="o" )||(value3==="o" && value6==="o" && value9==="o" )||(value2==="o" && value5==="o" && value8==="o" )||(value3==="o" && value5==="o"&&value7==="o" )||(value1==="o" && value5==="o" && value9==="o" ))
    {
       alert("o wins")
    }
    else{
      alert("tie")
    }
   }
  
  return (
    <div id='main'>
      <table border={1} id='table'>
        <caption>Tic-tac-toe Application</caption>
       <tbody>
       <tr>
            <td onClick={()=>{setvalue1("x")}} onDoubleClick={()=>{setvalue1("o")}} id="db1"><button>{value1}</button></td>
            <td onClick={()=>{setvalue2("x")}} onDoubleClick={()=>{setvalue2("o")}} id="db2"><button>{value2}</button></td>
            <td onClick={()=>{setvalue3("x")}} onDoubleClick={()=>{setvalue3("o")}} id="db3"><button>{value3}</button></td>
        </tr>
        <tr>
            <td onClick={()=>{setvalue4("x")}} onDoubleClick={()=>{setvalue4("o")}} id="db4"><button>{value4}</button></td>
            <td onClick={()=>{setvalue5("x")}} onDoubleClick={()=>{setvalue5("o")}} id="db5"><button>{value5}</button></td>
            <td onClick={()=>{setvalue6("x")}} onDoubleClick={()=>{setvalue6("o")}} id="db6"><button>{value6}</button></td>
        </tr>
        <tr>
            <td onClick={()=>{setvalue7("x")}} onDoubleClick={()=>{setvalue7("o")}} id="db7"><button>{value7}</button></td>
            <td onClick={()=>{setvalue8("x")}} onDoubleClick={()=>{setvalue8("o")}} id="db8"><button>{value8}</button></td>
            <td onClick={()=>{setvalue9("x")}} onDoubleClick={()=>{setvalue9("o")}} id="db9"><button>{value9}</button></td>
        </tr>
       </tbody>
      </table>
      <button onClick={final} id='btn'>GAME OVER</button>
     </div>
  )
}

export default App
