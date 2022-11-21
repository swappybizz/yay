import React from "react";

const MainOutput = ({ props, gp, pred, skatt, simuskatt }) => {
  return (
    <div className="flex-col bg-[#ededed] border-2 border-gray-400 shadow-lg m-3 ml-6 rounded-xl p-6  max-w-[100%] overflow-hidden pt-4">
      <p className="font-semibold text-xl text-slate-500">Driftsresultat</p>
      <p className="font-semibold text-l text-slate-500">NOK</p>
      <p
        onCopy={(event) => {
          event.preventDefault();
        }}
        className="flex-col max-w-[80]  font-semibold text-6xl font-heroSubText text-admit-red"
      >
        {props}
      </p>
      <p className="mt-3 font-semibold text-sm font-heroSubText text-admit-red">
        {isNaN(gp) ? "" : gp}
        {" %"}
      </p>
      <p className="mt-3 font-semibold text-sm text-slate-500">Våre Forslag</p>
      <p className="font-semibold text-l text-admit-red">NOK {pred}</p>
      <div className="w-full flex justify-start">
        <p className="font-semibold text-sm font-heroSubText text-slate-500">
          Resultat før skatt:  <span className="text-admit-red">NOK {skatt}</span>
        </p>
        <p className="font-semibold text-sm font-heroSubText text-slate-500 ml-10">
          2023 Simulert:  <span className="text-admit-red">NOK {simuskatt}</span>
        </p>
      </div>
    </div>
  );
};

export default MainOutput;
