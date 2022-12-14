import {Box} from "@mui/material";
import BorderCountry from "./borderCountry";
import {useEffect, useState} from "react";


export default function BorderCountries({borders}) {

    const labelStyle = {marginBottom: '12px', fontWeight: '600'};

    const URL = 'https://restcountries.com/v3.1/alpha?codes=' + borders.toString();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(countries => setCountries(countries));
    }, [URL]);

    return <Box display={"flex"} flexWrap={"wrap"}>
        <label style={labelStyle}>
            Border countries:
        </label>
        <Box display={"flex"} flexWrap={"wrap"} mb={'35px'}>
            {
                countries.map((country) => <BorderCountry name={country.name.common} cca2={country.cca2}/>)
            }
        </Box>
    </Box>
}
