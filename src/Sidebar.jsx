const SideBar = ({ banned, remover, removeBan }) => {
    return (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-red-100 p-4 overflow-scroll">
            <h1 className="bg-red-600 rounded-md text-white text-xl">Ban List</h1>
            <p className="m-4">Select an attribute to add to the ban list</p>
            <div className="flex flex-wrap w-[300px] items-center">
                {banned.types && banned.types.length > 0 ? (
                    banned.types.map((type, index) => (
                        <div key={index} className="flex flex-wrap items-center mx-4">
                            <button onClick={() => removeBan(type)} className="text-center w-[110px] text-lg mb-4 p-1 rounded-md bg-red-400">{type}</button>
                        </div>
                    ))
                ) : (
                    <>
                     <div className="w-[300px] items-center">
                        <p>No types banned.</p>
                    </div>
                    </>
                )}
                {banned.regions && banned.regions.length > 0 ? (
                    banned.regions.map((regions, index) => (
                        <div key={index} className="flex flex-wrap items-center mx-4">
                            <button onClick={() => remover(regions)} className="text-center mb-4 p-1 w-[110px] text-lg  rounded-md bg-red-400">{regions}</button>
                        </div>
                    ))
                ) : (
                    <>
                    <div className="w-[300px] items-center">
                       <p>No regions banned.</p>
                   </div>
                   </>
                )}
            </div>
        </div>
    );
};

export default SideBar;

