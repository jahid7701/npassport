import "./card.css";
import Link from "next/link";
export default function Cardcom(props) {
    return (<div className="cardcomp">
        <div className="cardicon"><div className="bicon">{props.hicon}</div></div>
        <div className="carddetail">
            <div className="cardcon">
                <div><h3>{props.name}</h3></div>
                <div className="linkcard"><Link href={props.liname}><p >{props.title}</p><div>{props.ficon}</div></Link>
                </div>
            </div>
        </div>
    </div>)
};