async function Api() {
    const url = process.env.API_URL;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "b3ea33a726msh89aa9258f7eccc2p1d4e94jsn2a1f22dcbdcd",
            'X-RapidAPI-Host': "weatherapi-com.p.rapidapi.com",
        }
    };
    try {
        if (url) {
            const response = await fetch(url, options);
            const result = await response.json();
            const api = result.location
    
            return <>
                <div className=" ">
                    <p>country</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.country
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>name</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.name
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>localtime</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.localtime
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>region</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.region
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>tz_id</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.tz_id
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>lat</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.lat
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>lot</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.lot
                        }
                    </p>
                </div>
                <div className=" ">
                    <p>localtime_epoch</p>
                    <p className="text-white font-bold text-2xl ">
                        {
                            api.localtime_epoch
                        }
                    </p>
                </div>
            </>
        }
    } catch (error) {
        console.error(error);
    }
}



export default Api