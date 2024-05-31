function Symbols ({itemToShow}) {
    
    return(<div className="products">
    {itemToShow.map((element => {
    const {id, name, image, description}=element;

    return(
        <div className="product-card" key={id}>
            <img src={image}alt="" width="400px" height="400px"/>
            <div className="card-content">
                <h2>{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    )
    }))}
        
    </div>

    )
}
export default Symbols;