import { TextField } from "@mui/material";

const EmailInputField = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[12px] text-left text-mid text-text-color font-poppins">
      <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
        <span>{`Email `}</span>
        <span className="text-orangered-100">*</span>
      </div>
      <TextField
        className="w-[496px] relative"
        color="info"
        placeholder="Enter Email"
        required={true}
        fullWidth={true}
        sx={{ width: 496 }}
        variant="outlined"
        multiline
      />
    </div>
  );
};

export default EmailInputField;