import React, { useState, useContext } from "react";
import { TextField, Button, Box, IconButton, InputAdornment } from "@mui/material";
import { CounterContext } from "../../Context";
import useAuth from "../../Hooks/useAuth";

const Step = ({ data, step, pasos }) => {
  const { inputs, buttonText, onSubmit } = data;


  const access = useAuth("counterData.user.jwt");
  console.log(access);

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => onSubmit(e, step, pasos)}
    >
      {inputs.map((input, i) => {
        const { label, type, value, valid, onChange, helperText, validator } =
          input;

        return (
          <TextField
            key={i}
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && helperText}
            value={value}
            onChange={(e) => onChange(e, i, step, validator, pasos)}
          />
        );
      })}

      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;