import Symbols from "./Symbols";
import { data } from "../data";
import { useState } from "react";
import Buttons from "./Buttons";
import Footer from "./Footer";

function Home() {
    const [symbols, setSymbols] = useState(data);
    const chosenSymbols=(searchTerm)=> {
    const newSymbols = data.filter((element) => element.searchTerm === searchTerm);
    setSymbols(newSymbols);
}
    return (
        <div className="header">
            <h1 className="back">How to be brave 🔱 like Ukraine?</h1>
            <Buttons filteredSymbols={chosenSymbols} /> 
            <Symbols itemToShow={symbols} />
            <Footer />
        </div>
    );
}
export default Home;