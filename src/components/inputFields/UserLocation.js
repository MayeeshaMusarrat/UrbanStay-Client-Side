import { Autocomplete, TextField } from "@mui/material";

const UserLocation = () => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-start gap-[35px] text-left text-mid text-text-color font-poppins">
      <div className="flex flex-col items-start justify-start gap-[7px]">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
            <span>{`Country/Region `}</span>
            <span className="text-orangered-100">*</span>
          </div>
          <Autocomplete
            className="w-[482px] relative"
            sx={{ width: "100%" }}
            disablePortal
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label=""
                variant="outlined"
                placeholder="Enter Country"
                helperText=""
                required
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
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label=""
              variant="outlined"
              placeholder="Enter City"
              helperText=""
              required
            />
          )}
        />
      </div>
    </div>
  );
};

export default UserLocation;