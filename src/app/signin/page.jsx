'use client'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
export default  function SignIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");   
    const router=useRouter();
    async function  handlesub(){
      
      try{
   await axios.post("/api/signin",{email,password})
   .then((res)=>{console.log(res)})
   
    router.push("/");
  }
    catch(error){
      console.log("Error During registration")
    }
  }
    return(
        <div>
            < form onSubmit={handlesub}>
            <h1>Enter Online Registration Portal</h1>
            <div><label htmlFor="email">Email address</label><br/>
            <input type="email"  onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div><label htmlFor="password">Password</label><br/>
            <input type="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <Link href={"/forgot"}>Forgot Password</Link>       
            <button type="submit" >Sign In</button>
            </form>
        </div>
    )
}