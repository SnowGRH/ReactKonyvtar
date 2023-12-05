import Kartyater from "./komponens/Kartyater.js";
import {ADAT} from "./Adat.js";
import './App.css';

function App() {
  function katt(szoveg) {
    console.log(szoveg.cim);
    console.log(szoveg.szerzo);
    console.log(szoveg.ar);

}
  return (
    <div className="App">
      <header className="App-header">
      <h1>Könyvesbolt</h1>
      </header>
      <article>
      <Kartyater lista={ADAT} katt={katt}/>
      </article>
    </div>
  );
}

export default App;
