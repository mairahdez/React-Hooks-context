import React, { useState } from "react";
import { TextField, Button, Box, } from "@mui/material";
import { validarInput } from "./validacionesDE";

const DatosEntrega = ({updateStep}) => {

const [address, setAdress] = useState({value: "", valid: null});
const [city, setCity] = useState({value: "", valid: null});
const [place, setPlace] = useState({value: "", valid: null});


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
      onSubmit= {(e) => {
        e.preventDefault();
        updateStep(3);
        console.log(address, city, place);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ address.value }
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setAdress ({value, valid });
        }}
        error={address.valid === false}
        helperText={
          address.valid === false && "Ingresa al menos 4 caracteres."
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setCity ({value, valid });
        }}
        error={city.valid === false}
        helperText={
          city.valid === false && "Ingresa al menos 4 caracteres ."
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={place.value}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setPlace ({value, valid });
        }}
        error={place.valid === false}
        helperText={
          place.valid === false && "Ingresa al menos 4 caracteres  ."
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
