import { useMemo, useCallback } from "react";
import { TextField } from "@mui/material";

const StaticInputField = ({ label, width }) => {

  const inputStyle = useMemo(() => {
    return {
      width: width,
    };
  }, [width]);

  return (
    <div className="w-[336px] flex flex-col items-start justify-start gap-[5px] text-left text-mid text-text-color font-poppins">
      <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
        <span>{label}</span>
        <span className="text-orangered-100">*</span>
      </div>
      <TextField
        className="relative"
        color="info"
        placeholder={`Enter ${label}`}
        required={true}
        fullWidth={true}
        style={inputStyle}
        variant="outlined"
        multiline
      />
    </div>
  );
};

export default StaticInputField;