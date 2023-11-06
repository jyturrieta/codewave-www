import React from "react";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function ContactForm() {
    let initialValue = {
        nombre :'',
        empresa: '',
        email:'',
        telfono: '',
        mensaje: '',
    }

    const validationSchema = Yup.object({
        nombre: Yup.string().required('Ingrese su nombre'),
        empresa: Yup.string().required('Ingrese el nombre de la empresa'),
        email: Yup.string().required('Ingrese su emial'),
        telefono: Yup.string().required('Ingrese su numero de telefono')
    })

    const {handleSubmit, handleChange, values, setFieldValue,errors} = useFornik({
        initialValue,
        validationSchema,
        onSubmit: (data) => {
            console.log(data)
        }
    })


  return (
    <>
    <Box id="contacto" bgcolor="primary.dark">
      <Box sx={{display:"flex", justifyContent: "center", flexDirection:"column"}}>
        <Box sx={{padding:"2rem"}}>
          <Typography variant="h4" align="center" color="white.main">
            CONTÁCTANOS
          </Typography>
          <Typography variant="h6" align="center" color="white.main">
            Responderemos sus consultas a la brevedad
          </Typography>
        </Box>
      </Box>
      <Box display="grid" justifyContent="center"  >
      <form className='form-container' onSubmit={handleSubmit}>
        <Grid sx={{maxWidth:"md"}} container spacing={2} >
            <Grid item xs={12} sm={6} md={6}>
              
                <TextField
                 label="Nombre"
                    variant="filled"
                    fullWidth
                    type="text"
                    value={values.nombre}
                    onChange={(e) => {
                         setFieldValue("nombre", e.target.value);
                    }}
                    helperText={errors.nombre}
                    error={errors.nombre}
                    color="relaxed"
                    sx={{background:"white"}}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Empresa"
                    variant="filled"
                    fullWidth
                    type="text"
                    value={values.empresa}
                    onChange={(e) => {
                     setFieldValue("empresa", e.target.value);
                    }}
                    helperText={errors.empresa}
                    error={errors.empresa}
                    color="relaxed"
                    sx={{background:"white"}}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Email"
                    variant="filled"
                    fullWidth
                    type="email"
                    value={values.email}
                    onChange={(e) => {
                     setFieldValue("email", e.target.value);
                        }}
                    helperText={errors.email}
                    error={errors.email}
                    color="relaxed"
                    sx={{background:"white"}}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Teléfono"
                    variant="filled"
                    fullWidth
                    type="text"
                    value={values.telefono}
                    onChange={(e) => {
                        setFieldValue("telefono", e.target.value);
                    }}
                    helperText={errors.telefono}
                    error={errors.telefono}
                    sx={{background:"white"}}
                    color="relaxed"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                 label="Mensaje"
                    rows={4}
                    fullWidth
                    type="text"
                    value={values.mensaje}
                    onChange={(e) => {
                        setFieldValue("mensaje", e.target.value);
                    }}
                    helperText={errors.mensaje}
                    multiline
                    variant="filled"
                    sx={{background:"white"}}
                    color="relaxed"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} display="grid" justifyContent="center">
                <Button
                    type="submit"
                    label="Enviar"
                    color="relaxed"
                    onClick={handleSubmit}
                    variant="contained"
                    size="large"
                    sx={{marginBottom:4}}
                >Enviar</Button>
            </Grid>
          </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
}
