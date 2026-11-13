function Pokemon ({props}) {

    return (
        <div className="pokemon-information">
            <h3> {props.name} </h3>
            
            {/* Vikten och löngden i PokeAPI mäts i hektogram och decimeter */}
            <p className="weight">{` Weight: ${Number(props.weight) / 10}kg` }</p>
            
            <img src={props.sprites.other.showdown.front_default} alt={`Animerade GIF av ${props.name}`}  />
            {console.log(props.sprites.front_default)}
            
            <ul>
            {props.types.map(item => <li key={item.slot}>{item.type.name}</li>)}

            </ul>
            <p className="height"> {`Height: ${Number(props.height) / 10}m`}</p>
        </div>
    )
}
export default Pokemon