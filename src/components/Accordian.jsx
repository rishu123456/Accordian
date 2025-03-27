import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const handleSinglezselection= (getCurrentId)=>{
        setSelected(getCurrentId ===selected ? null : getCurrentId);

    }
    

    return (
        <div className="accordian">
            {
                data && data.length>0 ? 
                data.map(dataitem=><div className="item">
                    <div onClick={()=>handleSinglezselection(dataitem.id)} className="title">
                        <h3>{dataitem.question}</h3>
                        <span>+</span>
                    </div>
                    {selected===dataitem.id ? <div className="answer">
                        <h5>{dataitem.Answer}</h5>

                    </div>:null
                    }
                </div>)
                 : <p>no data available</p>


            }
        </div>
    );
}
