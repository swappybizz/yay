import React, { useState } from "react";
import Head from "next/head";
import FormInput from "./FormInput";
import FormInputPercent from "./FormInputPercent";
import DisabledInput from "./DisabledInput";
import DisabledInput2 from "./DisabledInput2";
import MainOutput from "./MainOutput";
import MainOutput2 from "./MainOutput2";
import CallToSignUp from "./CallToSignUp";
import { sum, subtract, chain, evaluate, round } from "mathjs";

export default function Home() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const f = sum(b, c, d, e).toString();
  const g = subtract(a, f).toString();
  const [h, setH] = useState(0);
  const [i, setI] = useState(0);
  const j = chain(g).add(h).subtract(i).done().toString();
  const jFinal = chain(g).add(h).subtract(i).done().toLocaleString();
  const k = chain(j).divide(a).multiply(100).done().toString();

  const [ap, setAp] = useState(0);
  const [bp, setBp] = useState(0);
  const [cp, setCp] = useState(0);
  const [dp, setDp] = useState(0);
  const [ep, setEp] = useState(0);

  const [hp, setHp] = useState(0);
  const [ip, setIp] = useState(0);

  const af = evaluate(`${a}+${ap ? ap : 0}%`).toString();
  const as = evaluate(`${a}+5%`).toString();
  const bf = evaluate(`${b}+${bp ? bp : 0}%`).toString();
  const bs = evaluate(`${b}+15%`).toString();
  const cf = evaluate(`${c}+${cp ? cp : 0}%`).toString();
  const cs = evaluate(`${c}+10%`).toString();
  const df = evaluate(`${d}+${dp ? dp : 0}%`).toString();
  const ds = evaluate(`${d}+0%`).toString();
  const ef = evaluate(`${e}+${ep ? ep : 0}%`).toString();
  const es = evaluate(`${e}+15%`).toString();
  const ff = sum(bf, cf, df, ef).toString();
  const fs = sum(bs, cs, ds, es).toString();
  const gf = round(subtract(af, ff), 2).toString();
  const gFinal = round(subtract(af, ff), 2).toLocaleString();

  const gs = subtract(as, fs).toString();
  const hf = evaluate(`${h}+${hp ? hp : 0}%`).toString();
  const hs = evaluate(`${h}+50%`).toString();
  const If = evaluate(`${i}+${ip ? ip : 0}%`).toString();
  const Is = evaluate(`${i}+100%`).toString();
  const jf = chain(gf).add(hf).subtract(If).done().toString();
  const js = chain(gs).add(hs).subtract(Is).done().toString();
  const jsFinal = chain(gs).add(hs).subtract(Is).done().toLocaleString();
  const kf = round(chain(jf).divide(af).multiply(100).done(), 2).toString();
  const ks = round(chain(js).divide(as).multiply(100).done(), 2).toString();
  const fp = chain(ff).subtract(f).divide(f).multiply(100).done().toString();
  const gp = round(
    chain(gf).subtract(g).divide(g).multiply(100).done(),
    2
  ).toString();
  const predA = round(
    evaluate(`(${a}+5%) -((${b}+15%)+(${c}+10%)+(${d}+0%)+(${e}+15%))`),
    2
  ).toString();
  const predAFinal = round(
    evaluate(`(${a}+5%) -((${b}+15%)+(${c}+10%)+(${d}+0%)+(${e}+15%))`),
    2
  ).toLocaleString();
  const predB = round(
    evaluate(`(${predA}+(${h}+50%)-(${i}+100%)/(${a}+5%))`),
    2
  ).toString();
  return (
    <>
      <div className="pt-4 pl-12 font-admitTitle border-t-gray-300 border-t-2 bg-[#ededed]  overflow-hidden">
        <Head>
          <title>Admit kampanje Activity Based Costing</title>
          <meta
            name="description"
            content="Legg inn dine tall i kalkulatoren vår og finn ut hvordan det ser ut for din bedrift:"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="lg:hidden  justify-center items-center">
          <p className="text-4xl m-6">
            Please use screens with larger width to access the dashboard.
          </p>
        </div>
        <div className="lg:flex hidden">
          <main className="bg-[transparent] bg-opacity-25 w-full m-0 p-0 ">
            <div className="flex  ">
              <div className="min-w-[50%]  ">
                <p className="font-semibold ml-[-1em] pl-0 text-4xl text-admit-dark-blue">
                  Regnskap
                </p>
                <p className="font-medium ml-[-1.5em] pl-0 text-2xl text-admit-dark-blue">
                  2021
                </p>
              </div>
              <div className="min-w-[50%]">
                <p className="font-semibold ml-32 text-4xl text-admit-dark-blue">
                  Simulert
                </p>
                <p className="font-medium ml-32 text-2xl text-admit-dark-blue">
                  2023
                </p>
              </div>
            </div>
            <div className="flex p-5 pt-8 bg-transparent bg-opacity-25 min-w-[50%]  ">
              <div className="flex min-w-[50%] mb-auto justify-around ">
                <div className="flex-col">
                  <FormInput props={"Driftsinntekter"} setTesty={setA} />
                  <FormInput props={"Varekostnader"} setTesty={setB} />
                  <FormInput
                    props={"Lønn og sosiale kostnader"}
                    setTesty={setC}
                  />
                  <FormInput props={"Avskrivninger"} setTesty={setD} />
                  <FormInput props={"Driftskostnader"} setTesty={setE} />
                  <FormInput props={"Finansinntekter"} setTesty={setH} />
                  <FormInput props={"Finanskostnader"} setTesty={setI} />
                  <p className="font-semibold text-sm font-heroSubText text-slate-500">
                    Resultat før skatt:{" "}
                    <span className="text-admit-red">NOK {jFinal}</span>
                  </p>
                </div>
                <div className="flex-col">
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setAp}
                  />
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setBp}
                  />
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setCp}
                  />
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setDp}
                  />
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setEp}
                  />
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setHp}
                  />
                  <FormInputPercent
                    props={"Forutsagt endring %"}
                    setPercent={setIp}
                  />
                </div>
                <div className="Flex-col">
                  <DisabledInput
                    plc={"Forslag"}
                    prct={5}
                    cmt={
                      "Mange vil få problemer. Det vil øke konkurransen og gi prispress nedover"
                    }
                  />
                  <DisabledInput
                    plc={"Forslag"}
                    prct={15}
                    cmt={
                      "Ekstra kostnader ved å flytte innkjøp hjem til Europa"
                    }
                  />
                  <DisabledInput
                    plc={"Forslag"}
                    prct={10}
                    cmt={"Lønnsøkning/lønnsglidning 6% i 2022 og 4% i 2023"}
                  />
                  <DisabledInput
                    plc={"Forslag"}
                    prct={0}
                    cmt={"Ingen økning"}
                  />
                  <DisabledInput
                    plc={"Forslag"}
                    prct={15}
                    cmt={
                      "Økte energikostnader og generell økning i driftskostnader"
                    }
                  />
                  <DisabledInput
                    plc={"Forslag"}
                    prct={50}
                    cmt={
                      "Med urolige børstall tror vi man vil søke tryggere havn = bankinnskudd for overskuddslikviditet"
                    }
                  />
                  <DisabledInput
                    plc={"Forslag"}
                    prct={100}
                    cmt={
                      "Med urolige børstall tror vi man vil søke tryggere havn = bankinnskudd for overskuddslikviditet"
                    }
                  />
                </div>
                <div className="Flex-col">
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={as}
                    cmt={
                      "Mange vil få problemer. Det vil øke konkurransen og gi prispress nedover"
                    }
                  />
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={bs}
                    cmt={
                      "Ekstra kostnader ved å flytte innkjøp hjem til Europa"
                    }
                  />
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={cs}
                    cmt={"Lønnsøkning/lønnsglidning 6% i 2022 og 4% i 2023"}
                  />
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={ds}
                    cmt={"Ingen økning"}
                  />
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={es}
                    cmt={
                      "Økte energikostnader og generell økning i driftskostnader"
                    }
                  />
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={hs}
                    cmt={
                      "Med urolige børstall tror vi man vil søke tryggere havn = bankinnskudd for overskuddslikviditet"
                    }
                  />
                  <DisabledInput2
                    plc={"simuleret>2023"}
                    prct={Is}
                    cmt={
                      "Med urolige børstall tror vi man vil søke tryggere havn = bankinnskudd for overskuddslikviditet"
                    }
                  />
                  <p className="font-semibold text-sm font-heroSubText text-slate-500 ml-2">
                    2023 Simulert:{" "}
                    <span className="text-admit-red">NOK {jsFinal}</span>
                  </p>
                </div>
              </div>

              <div
                className=" min-w-[50%] mb-auto 
           "
              >
                <div className="container max-w-[80%] ml-24">
                  <MainOutput
                    props={gFinal ? gFinal : 0}
                    gp={gp}
                    pred={predAFinal}
                    skatt={jFinal}
                    simuskatt={jsFinal}
                  />
                  <MainOutput2 props={kf ? kf : 0} pred={ks} />
                  {/* <AccordionOutput/> */}
                </div>
                <CallToSignUp />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
