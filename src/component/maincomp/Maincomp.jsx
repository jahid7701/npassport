import Data from "@/component/lib/countrydata";
export default function Maincomp(){  
    return(<div>
     
      {
        Data.map((value,index)=>{
            return(
                <div className="box d-flex top" key={index}>
                <p>{value.country}</p>  
                   </div>
            )
        })
    }
    </div>)
}