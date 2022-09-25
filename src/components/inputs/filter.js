import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const regions = ['Asia', 'Africa', 'America', 'Europe', 'Oceania'];

export default function Filter({select}) {
    return <FormControl>
        <InputLabel id="filter-label">Filter by region</InputLabel>
        <Select labelId="filter-label" className={select}>
            {regions.map((region) => (
                <MenuItem key={region}>
                    {region}
                </MenuItem>
            ))}
        </Select>
    </FormControl>

}