import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";

const BirthdateInputField = () => {
  const [birthdateInputDateTimePickerValue, setBirthdateInputDateTimePickerValue] = useState(null);

  return (
    <div className="flex flex-col items-start justify-start gap-[12px] text-left text-mid text-text-color font-poppins">
      <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
        <span>{`Birthdate `}</span>
        <span className="text-orangered-100">*</span>
      </div>
      <div className="w-[482px] relative">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={birthdateInputDateTimePickerValue}
            onChange={(newValue) => setBirthdateInputDateTimePickerValue(newValue)}
            slotProps={{
            textField: {
              variant: "outlined",
              size: "medium",
              fullWidth: true,
              required: true,
              color: "info",
            }}}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default BirthdateInputField;