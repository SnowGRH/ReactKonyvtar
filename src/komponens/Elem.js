function Elem(props) {
    function katt() {
        console.log("asd");
        props.katt(props.ertek);
    }
    return (<div className="elem" >
    <p>{props.ertek.cim}</p>
    <p>{props.ertek.szerzo}</p>
    <p>{props.ertek.ar}</p>
    <button onClick={katt} >OK</button>
    </div>)
}
export default Elem;