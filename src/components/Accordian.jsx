import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const  [handleclick,setHandleclick] = useState(false);
    const [selectedMultiple, setSelectedMultiple] = useState([]);
    const handleSinglezselection= (getCurrentId)=>{
        setSelected(getCurrentId ===selected ? null : getCurrentId);

    }

    const handleMultiselection= (getCurrentId)=>{
        let s= [...selectedMultiple];
        let findUndex = s.indexOf(getCurrentId);
        if(findUndex===-1){
            s.push(getCurrentId);
        }
        else {
            s.splice(findUndex,1);

        }
        
        setSelectedMultiple(s);

    }

     const enableHandleCLick = () =>{
        setHandleclick(true);
     }
    

    return (
        <div className="accordian">
            <button className="button" onClick={enableHandleCLick}>EnableMultiselection</button>
            {   
                data && data.length>0 ? 
                
                data.map(dataitem=><div className="item">
                    <div onClick={()=> handleclick  ? handleMultiselection(dataitem.id) :  handleSinglezselection(dataitem.id)} className="title">
                        <h3>{dataitem.question}</h3>
                        <span>+</span>
                    </div>
                    {selected===dataitem.id || selectedMultiple.indexOf(dataitem.id)!==-1 ? <div className="answer">
                        <h5>{dataitem.Answer}</h5>

                    </div>:null
                    }
                </div>)
                 : <p>no data available</p>


            }
        </div>
    );
}
