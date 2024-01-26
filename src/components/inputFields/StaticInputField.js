import { TextField } from "@mui/material";

const StaticInputField = ({ label }) => {

  return (
    <div className="w-[336px] flex flex-col items-start justify-start gap-[5px] text-left text-mid text-text-color font-poppins">
      <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
        <span>{label}</span>
        <span className="text-orangered-100">*</span>
      </div>
      <TextField
        className="w-[336px] relative"
        color="info"
        placeholder={`Enter ${label}`}
        required={true}
        fullWidth={true}
        sx={{ width: 336 }}
        variant="outlined"
        multiline
      />
    </div>
  );
};

export default StaticInputField;