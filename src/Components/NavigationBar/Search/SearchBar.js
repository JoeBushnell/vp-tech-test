import { Autocomplete, Box, TextField } from "@mui/material";

function SearchBar({ cities, setSearchInput }) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={cities?.results || []}
      autoHighlight
      getOptionLabel={(city) => city.city}
      onInputChange={(event, value) => {
        setSearchInput(value);
      }}
      renderOption={(props, city) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img loading="lazy" width="20" alt="" />
          {city.city}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a city"
          inputProps={{
            ...params.inputProps,
          }}
          // onChange={input => {
          //     setSearchInput(input.currentTarget.value);
          // }}
        />
      )}
    />
  );
}

export default SearchBar;
