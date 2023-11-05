import "./card.css";
import Cardcom from "./Cardcomp";
import UpdateIcon from '@mui/icons-material/Update';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Card(){
    return(
    <div className="card_container">
        <div className="card">          
        <Cardcom name="Apply Online  for e-Passport/Re-Issue"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<MonitorOutlinedIcon className="khoki"/>} title="Directly to online application"  liname="/apply"/>
        <Cardcom name="5 steps to e-Passport"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<FormatListNumberedOutlinedIcon   className="khoki" />}  title="Information about all application steps" liname="/fees"/>
        <Cardcom name="Urgent applications"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={< UpdateIcon  className="khoki"  />} title="Need a passport   quickly? " liname="/urgent"/>
        <Cardcom name="Passport fees"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<CurrencyPoundIcon  className="khoki" />} title="Payment information and options"liname="/check"/>
        <Cardcom name="Instuctions"   ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<MenuBookIcon   className="khoki" />} title="Have a look before applying" liname="/step"/>
        <Cardcom name="Application at RPO Bangladesh Secretariat"  title="More information" ficon={<ArrowForwardIosIcon className="khoni" />} hicon={<DescriptionIcon  className="khoki"/>} liname="/apply"/>
    </div>
    </div>)
}