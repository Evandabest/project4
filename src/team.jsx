const Team = ({ team, remove }) => {
    if (team.length > 0) {
        return (
            <div className="flex flex-wrap justify-center items-center bg-red-300 p-2 w-1/2 mx-auto mt-4">
                {team.map((member, key) => (
                    <div key={key} className="flex flex-col items-center mx-4">
                        <img onClick={() => remove(member)} className="min-w-24 min-h-24" src={member.img} alt={member.name} />
                        <h1 className="text-center mb-4">{member.name}</h1>
                        <div className="flex flex-wrap justify-center">
                            {member.types.map((type, index) => (
                                <h1 key={index} className="bg-red-500 inline-grid rounded-md p-1 mb-1 mx-1">{type}</h1>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
};

export default Team;

