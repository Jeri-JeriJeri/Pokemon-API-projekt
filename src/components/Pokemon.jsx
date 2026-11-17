function Pokemon({ props }) {
    const storBokstavNamn = props.name.charAt(0).toUpperCase() + props.name.slice(1)

    return (<>
        <div className="pokemon-image">
            <h2>{storBokstavNamn}</h2>
            <img src={props.sprites.other.dream_world.front_default} alt={`Bild på ${props.name}`} id="pokemon-bild" />
        </div>
        <div className="pokemon-information">
            <h4 className="rubrik-img rubrik-info">Appearance</h4>
            <h4 className="rubrik-name rubrik-info" >Name</h4>
            <h4 className="rubrik-type rubrik-info">Type</h4>
            <h4 className="rubrik-height rubrik-info">Height</h4>
            <h4 className="rubrik-weight rubrik-info">Weight</h4>

            <p className="info" id="info-namn"> {storBokstavNamn} </p>

            {/* Vikten och löngden i PokeAPI mäts i hektogram och decimeter */}
            <span id="weight" className="info">{Number(props.weight) / 10}kg</span>

            <span id="height" className="info"> {Number(props.height) / 10}m</span>

            <img src={props.sprites.other.showdown.front_default} className="info" alt={`Animerade GIF av ${props.name}`} />

            <ul className="info">
                {props.types.map((item, i) => <li className="type" key={item.slot}>{i + 1}. {
                    item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
                }</li>)}

            </ul>
        </div>
    </>
    )
}
export default Pokemon