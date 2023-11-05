'use client'
import axios from "axios";
import Cdatas from "@/component/lib/countrydata";
import Pdata from "@/component/lib/Police";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Apply() {
    
    const [pols, setPolice] = useState("");
    const [pold, setpold] = useState("");
    const [pstaes, setpStaes] = useState([]);
    const router=useState();
    const policehn = (e) => {
        const policest = e.target.value;
        const pla = Pdata.find(poli => poli.district === policest).areas;
        setpStaes(pla);
        setpold(policest);

    }
    async function handlechan(event) {
        event.preventDefault();
        try {
            await axios.post("/api/countrydetails", { states, csta })
                .then(res => { console.log(res) })
                .catch(err => console.log(err))
            router.push("fees");
        }
        catch (error) {
            console.log("Error during registration")
        }
    }
    async function handlep(event) {
        event.preventDefault();
        try {
            await axios.post("/api/native", { pold, pols })
                .then(res => { console.log(res) })
                .catch(err => console.log(err))
            router.push("check");
        }
        catch (error) {
            console.log("Error during registration")
        }
    }

    const [states, setStates] = useState("");
    const [staes, setStaes] = useState([]);
    const [csta, setCsta] = useState("");
    const countryhn = (e) => {
        const bcountry = e.target.value;
        const sta = Cdatas.find(coun => coun.country === bcountry).cities;
        setStaes(sta)
        setStates(bcountry);
    }
    const nativ = (e) => {

        const hasan = document.querySelector(".bangladeshi1_p");
        const hasanin = document.querySelector(".bangladeshi1_o");
        hasan.style.display = "block";
        hasanin.style.display = "none";

    }

    const positiv = (e) => {

        const hasan = document.querySelector(".bangladeshi1_p");
        const hasanin = document.querySelector(".bangladeshi1_o");

        hasan.style.display = "none";
        hasanin.style.display = "block";
    }
    return (
        <div className="apply">
            <div className="haji">
                <h1>Step 1: Check availability of e‑Passport in your region</h1>
                <h3 >Are you Bangladeshi?</h3>
            </div>
            <div className="radiob">
                <div className="radiobt1">
                    <input type="radio" name="status" id="hadi" checked onClick={nativ} />YES
                </div>
                <br />
                <div>
                    <input type="radio" name="status" onClick={positiv} />NO
                </div>
            </div>
            <form className="bangladeshi1_p" onSubmit={handlep}>
                <div className="native">
                    <p>Select District your present address</p>
                    <select onChange={policehn}>
                        {
                            Pdata.map((valu, index) => {
                                return (
                                    <option key={index}>{valu.district}</option>
                                )
                            })
                        }
                    </select>
                    <p className="fuji"> Select the police station nearest to your present address</p>
                    <select onChange={(e) => setPolice(e.target.value)}>
                        {
                            pstaes.map((sp, index) => {
                                return (
                                    <option value={sp} key={index}>{sp}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <button type="submit" className="btn">Continue</button>
                <h1>{pold}</h1>
            </form>
            <form className="bangladeshi1_o" onSubmit={handlechan}>
                <h2>Select the country of your present address</h2>
                <div className="foreign">
                    <p className="jahil">Select country</p>
                    <select onChange={countryhn}>
                        {
                            Cdatas.map((value, index) => {
                                return (
                                    <option value={value.country} key={index}>{value.country}</option>
                                )
                            })
                        }
                    </select>
                    <p className="hnn"> Select a Bangladesh Mission</p>
                    <select onChange={(e) => setCsta(e.target.value)}>
                        {
                            staes.map((st, index) => {
                                return (
                                    <option value={st} key={index}>{st}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btn">Continue</button>
            </form>
            <h1>{states}</h1>
            <p>{csta}</p>
        </div>
    )
}