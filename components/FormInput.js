import React,{useState,useEffect} from "react";
import inputStyles from "../components/InputOne.module.css";

const FormInput = ({ props,setTesty }) => {
    const [placeHolder,SetPlaceholder]= useState("|")

    useEffect(() => {
        const timeout = setTimeout(() => {
           SetPlaceholder();
         }, 2500);
         return () => clearTimeout(timeout);
       },[]);

  return (
    <div className="font-heroSubText" >
    <div className={inputStyles.inputBody}>
      <div className={inputStyles.inputBox}>
        <input 
        type={"number"} 
        numeric
        required
        placeholder={"NOK"}
        onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
        onChange={(e)=>setTesty(e.target.value)}
        ></input>
        {placeHolder?<span className="animate-bounce"
        
        >{placeHolder}</span>
        :
        <span>{props}</span>
        }
        <i></i>
      </div>
    </div>
    </div>
  );
};

export default FormInput;
