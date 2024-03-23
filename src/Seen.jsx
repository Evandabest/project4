const Seen = ({alr}) => {
    return (
        <>
            <div className="fixed top-0 left-0 h-full w-1/4 bg-red-100 p-4 overflow-scroll">
                <div className="top-0 sticky bg-red-100 m-auto">
                    <h1 className="bg-red-600 rounded-md text-white text-xl">Pokemon Seen</h1>
                    <p>These are the pokemon you have previously seen</p>
                </div>
                {alr.map((member, key) => (
                <div key={key} className="flex flex-col items-center mx-4">
                    <img className="min-w-24 min-h-24" src={member.img} alt={member.name} />
                    <h1 className="text-center mb-4">{member.name}</h1>
                    <div className="flex flex-wrap justify-center">
                        {member.types.map((type, index) => (
                            <h1 key={index} className="bg-red-500 inline-grid rounded-md p-1 mb-1 mx-1">{type}</h1>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Seen;