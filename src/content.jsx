const Call = ({pokemon, fetch, banned, bannedr, update}) => {
    if (!pokemon.name) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <>
                <div className="flex flex-col items-center">
                    <img className="w-[250px] h-[250px]" src={pokemon.img}></img>
                    <h1 className="bg-red-400 p-1 rounded-md mb-2 text-white text-lg">{pokemon.name}</h1>
                    {
                    <div className="flex flex-wrap mx-4 justify-center w-[500px]">
                        {pokemon.types.map((type, index) => (
                                <button key = {index} onClick={() => banned(type)} className="bg-red-200 rounded-md mb-1 mx-1 px-4 py-2 max-w-[95px] max-h-[50px]">{type}</button>
                        ))}
                        {pokemon.regions.map((region, index) => (
                                <button key = {index} onClick={() => bannedr(region)} className="bg-red-200 rounded-md mb-1 mx-1 px-4 py-2 max-w-[95px] max-h-[50px]">{region}</button>
                        ))}
                    </div>
                    }
                </div>
                <br></br>
                <button className="bg-red-500 rounded-md text-white p-1 mx-4" onClick={fetch}>Catch!</button>
                <button className="bg-red-500 rounded-md  text-white p-1 mx-4" onClick={update}>Add to Team</button>
            </>
        )
    }
}

export default Call