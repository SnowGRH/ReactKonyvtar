import "./Kartyater.css";
import Elem from "./Elem.js";
function Kartyater(props) {
    function katt(szoveg) {

        props.katt(szoveg)
    }
    return(
        <div className="Kartyater">
        {
            props.lista.map(
                (elem,index)=>{
                    return(
                        <Elem ertek={elem} katt={katt} key={index} />
                        
                    )
                }
            )

        }
        </div>


    )
}
export default Kartyater;