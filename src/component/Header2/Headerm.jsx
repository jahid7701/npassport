import Link from "next/link";
import "./headm.css";
export default function Headerm(){
    return(
        <div className="mih">
            <Link href={"/signin"}>Sign In</Link>
            <div className="langua">
                <p>English</p>
                <p>Bangla</p>
            </div>
            <div className="fonts">
                <p>A+</p>
                <p>A-</p>
            </div>
        </div>
    )
}