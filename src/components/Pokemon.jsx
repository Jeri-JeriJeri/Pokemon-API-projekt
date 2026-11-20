function Pokemon({ pokemon }) {
    const storBokstavNamn = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return (<>
        <div className="pokemon-image">
            <h2>{storBokstavNamn}</h2>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={`Bild på ${pokemon.name}`} id="pokemon-bild" />
        </div>
        <div className="pokemon-information">
            <h4 className="rubrik-img rubrik-info">Appearance</h4>
            <h4 className="rubrik-name rubrik-info" >Name</h4>
            <h4 className="rubrik-type rubrik-info">Type</h4>
            <h4 className="rubrik-height rubrik-info">Height</h4>
            <h4 className="rubrik-weight rubrik-info">Weight</h4>

            <p className="info" id="info-namn"> {storBokstavNamn} </p>

            {/* Vikten och löngden i PokeAPI mäts i hektogram och decimeter */}
            <span id="weight" className="info">{Number(pokemon.weight) / 10}kg</span>

            <span id="height" className="info"> {Number(pokemon.height) / 10}m</span>

            <img src={pokemon.sprites.other.showdown.front_default} className="info" alt={`Animerade GIF av ${pokemon.name}`} />

            <ul className="info">
                {pokemon.types.map((item, i) =>{ 
                    const storBokstavTypes = item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1);
                    return <li className="type" key={item.slot}>{i + 1}. {storBokstavTypes}</li>})}

            </ul>
        </div>
    </>
    )
}
export default Pokemon