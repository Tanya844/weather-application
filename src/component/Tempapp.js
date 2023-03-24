import React, { useEffect, useState  } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Dehradun");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c4bcf2b8250a71961ea3d1131456a231`
            const response = await fetch(url);

            const resJson = await response.json();
            //console.log(response);
            setCity(resJson.main);
        };


        fetchApi();
    }, [search])


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }} />

                </div>

                {!city ? (
                    <p className="errorMsg"> No Data Found </p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"> </i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}F
                            </h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min}F | Max : {city.temp_max}F</h3>
                            

                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Tempapp
