import { useState } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import countryData from "../../data/countryData";

const UserLocation = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const handleCountryChange = (event, newValue) => {
    setSelectedCountry(newValue);
    setSelectedState(null);
  };

  return (
    <div className="flex flex-row flex-wrap items-start justify-start gap-[35px] text-left text-mid text-text-color font-poppins">
      <div className="flex flex-col items-start justify-start gap-[7px]">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
            <span>{`Country/Region `}</span>
            <span className="text-orangered-100">*</span>
          </div>


          <Autocomplete
              id="country-select-demo"
              sx={{ width: 480 }}
              fullwidth={true}
              options={countryData}
              value={countryData.label}
              onChange={(e) => setCountry(e.target.value)}
              onChange={handleCountryChange}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phoneCode}

                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                  }}


                />
              )}
            />
        </div>
        <div className="relative text-sm tracking-[0.2px] leading-[28px] font-inter text-second-text-color">
          Make sure the provided information matches your Government ID.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[4px]">
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
          <span>{`City `}</span>
          <span className="text-orangered-100">*</span>
        </div>
        <Autocomplete
          className="w-[505px] relative"
          sx={{ width: "100%" }}
          disablePortal
          options={selectedCountry?.states || []}
          getOptionLabel={(option) => option}
          onChange={(_, newValue) => setSelectedState(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select a State"
              variant="outlined"
            />
          )}
        />
      </div>
    </div>
  );
};

export default UserLocation;