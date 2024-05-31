function Buttons({filteredSymbols}) {
    return(
        <div className="cont">
            <button className="change" onClick = {() => filteredSymbols("flag")}>Flag</button>
            <button className="change" onClick = {() => filteredSymbols("trident")}>Trident</button>
            <button className="change" onClick = {() => filteredSymbols("maidan")}>Maidan</button>
            <button className="change" onClick = {() => filteredSymbols("plants")}>Plants</button>
            <button className="change" onClick = {() => filteredSymbols("handmade")}>Handmade</button>
        </div>
    )
}
export default Buttons;