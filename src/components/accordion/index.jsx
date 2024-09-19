/* single selection accordion */
//multiple slection accordion

import { useState } from "react";
import data from "./data";
import './style.css';
export default function Accordion(){
    const[selected, setSelected] = useState(null);
    const[enableMultiSelection,setenableMultiselection] = useState(false);
    const[multiple, setMultiple] = useState([]);

    function handleSinglesel(getCurrentId){
        
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId){
      let cpyMultiple = [...multiple];
      const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
      console.log(findIndexOfCurrentId);

      if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId,1);

      setMultiple(cpyMultiple);
    }
    console.log(selected,multiple);
     return (
     <div className="wrapper">
        <button onClick={() => setenableMultiselection(!enableMultiSelection)}>Enable Multi Selection</button>

       
        <div className="accordion">
{
    data && data.length > 0 ?
    data.map(dataItem => <div className="item">
        <div onClick={
            enableMultiSelection 
            ? ()=> handleMultiSelection(dataItem.id)
            : ()=> handleSinglesel(dataItem.id)
        } 
            className="title">
            <h3>{dataItem.question}</h3>
            <span>+</span>
            <div> {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                <div className="content">{dataItem.answer} </div>
                : null
                }
            </div>
        </div>
    </div> )
    : <div>No data found </div>
}
        </div>
     </div>
     )
}