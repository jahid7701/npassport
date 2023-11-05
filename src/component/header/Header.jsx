import Image from "next/image";
import Logo from "../../../public/pas1.jpg";
import Dlogo from "../../../public/pass2.jpg";
import "./header.css"
export default function Header() {
        return (<div className="belal">
                <div className="lflogo">
               
                
                        <Image src={Logo} alt="" className="glogo" />
                        <p>Government of the <br />People&apos;s Republic of Bangladesh</p> 
                    
                       
                </div>
                <div className="rflogo">
                <p>Dipartment of <br/> Immigration & Passports</p>
                
                <Image src={Dlogo} alt=""  className="plogo" />
                </div>
        </div>)
}