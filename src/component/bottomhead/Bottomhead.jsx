import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';
export default function Bottomhead() {
    return (
        <div className="bottomhead">           
            <ul className="navbot">
                <Link href={"/"}><HomeIcon className="ghome" /></Link>
                <Link href={"/apply"} className="asia">APPLY ONLINE</Link>
                <Link href={"/step"} >5 STEPS TO<br /> e-PASSPORT</Link>
                <Link href={"/urgent"}>URGENT<br /> APPLICATION</Link>
                <Link href={"/instuction"}>INSTRUCTIONS</Link>
                <Link href={"/fees"}> PASSPORT FEES</Link>
                <Link href={"/check"}>CHECK STATUS</Link>
                <Link href={"/contact"}>CONTACT</Link>
            </ul>
        </div>
    )
}