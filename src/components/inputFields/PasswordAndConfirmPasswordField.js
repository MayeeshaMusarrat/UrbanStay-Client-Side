import { useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const PasswordAndConfirmPasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-row flex-wrap items-start justify-start gap-[38px] text-left text-mid text-text-color font-poppins">
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
          <span>{`Choose a Strong Password `}</span>
          <span className="text-orangered-100">*</span>
        </div>
        <TextField
          className="[border:none] bg-[transparent] w-[482px] relative"
          color="info"
          placeholder="Choose a password (At least 8 characters long)"
          required={true}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "482px" }}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
          <span>{`Confirm Password `}</span>
          <span className="text-orangered-100">*</span>
        </div>
        <TextField
          className="[border:none] bg-[transparent] w-[496px] relative"
          color="info"
          placeholder="Confirm Password"
          required={true}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "496px" }}
        />
      </div>
    </div>
  );
};

export default PasswordAndConfirmPasswordField;