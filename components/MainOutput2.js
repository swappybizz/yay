import React from "react";

const MainOutput2 = ({ props,pred }) => {
  
  
  return (
    <div className="flex-col bg-[#ededed] transition-all duration-500 border-2 border-gray-400 shadow-lg m-3 ml-6 rounded-xl p-6  overflow-hidden">
      <p className="font-semibold text-xl text-slate-500">Resultatgrad</p>
      <p className="font-semibold text-l text-slate-500">%</p>
      <p
        onCopy={(event) => {
          event.preventDefault();
        }}
        className="flex-col max-w-[80] font-semibold text-6xl font-heroSubText text-admit-red"
      >
        {isNaN(props)?"":props}
      </p>
      <p className="mt-3 font-semibold text-sm text-slate-500">Våre Forslag</p>
      <p className="font-semibold text-l text-admit-red font-heroSubText">{isNaN (pred) ? 0 : pred + " %"}</p>
    </div>
  );
};

export default MainOutput2;
