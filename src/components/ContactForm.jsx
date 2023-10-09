import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Container, Grid } from "@mui/material";
import { Button, FormControl } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    // Enviar el formulario
  };

  return (
    <>
      <Box bgcolor="primary.main" sx={{display:"flex", justifyContent: "center", flexDirection:"column"}}>
        <Box>
          <Typography variant="h4" align="center" color="white.main">
            CONTÁCTANOS
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" align="center" color="white.main">
            Responderemos sus consultas a la brevedad
          </Typography>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Nombre"
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Empresa"
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Telefono"
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                 label="Mensaje"
                    variant="outlined"
                    fullWidth
                    type="text"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button
                    fullWidth
                    type="submit"
                    label="Enviar"
                    color="relaxed"
                    onClick={handleSubmit}
                    variant="contained"

                >Enviar</Button>
            </Grid>
        </Grid>
        </Box>
    </>
  );
}
