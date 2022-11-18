import React from "react";
import inputStyles from "../components/InputTwo.module.css";

const FormInputPercent = ({ props, setPercent }) => {
  return (
    <div className={inputStyles.inputBody}>
      <div className="ml-2 font-heroSubText">
        <div className={inputStyles.inputBox}>
          <input
            title="Enter Percent"
            type={"number"}
            numeric
            inputMode={"numeric"}
            required
            placeholder={"%"}
            onKeyDown={(e) => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
            onChange={(e) => setPercent(e.target.value)}
          ></input>
          <span className="">{props}</span>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default FormInputPercent;
