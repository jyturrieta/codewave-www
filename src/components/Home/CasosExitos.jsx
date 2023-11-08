import React from 'react';
<<<<<<< HEAD
import { Typography } from '@mui/material';
=======
import { Typography } from '@material-ui/core';
>>>>>>> 707fac4 (casos de existos mejorado)
import {makeStyles} from '@material-ui/core/styles';
import {Box} from "@mui/material";

import {Item} from "./Portfolio";

import depatas from '../../assets/casosExitos/depatas.png'
import juuk from '../../assets/casosExitos/juuk.png'
import nebu from '../../assets/casosExitos/nebu.png'
import {Box} from "@mui/material";
import {Item} from "./Portfolio";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: '14px',
        textAlign: 'center',
        color: ''
    },
});
export const productos = [
    {
        nombre: 'Depatas',
        imagenUrl: depatas,
        webUrl: '',
        descripcion: 'Inmediata y confiable asistencia virtual de vetarinaria. Servicion rapido y eficiente mejorando la salud de nuestras mascotas'
    },
    {
        nombre: 'Juuk',
        imagenUrl:juuk,
        webUrl: '',
        descripcion: 'Juuk es un plataforma que conecta guia turistico de pesca con pescadodores, lo que permite un proceso de reserva profecional eficiente y profecional'
    },
    {
        nombre: 'Nebu',
        imagenUrl:nebu,
        webUrl: '',
        descripcion: 'Una plataforma de contración donde los candidatos aplican a oportunidades laborales de acuerdo a sus habilidades y experiensia. Optimiza el tiempo del proceso para las empresas y los candidatos potenciando el proceso de contratacón.'
    },

];
const CasosDeExito = ({ productos }) => {
    const classes = useStyles()

    return (
        <Box
            id="casosExitos"
            bgcolor="primary.main"
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}
            className={classes.root}
        >
            <Box sx={{ padding: "2rem" }}>
<<<<<<< HEAD
                <Typography
                    variant="h4"
                    align="center"
                    style={{color:'#ffffff'}}>
=======
                <Typography variant="h4" align="center" color="white.main">
>>>>>>> 707fac4 (casos de existos mejorado)
                    CASOS DE ÉXITO
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWarp: 'wrap',
                    justifyContent: 'space-around',

                }}
            >
                {productos.map((producto, index) => (
<<<<<<< HEAD
                    <Item key={index} image={producto.imagenUrl} descripcion={producto.descripcion} nombre={producto.nombre} />
=======
                    <Item key={index} image={producto.imagenUrl} />
>>>>>>> 707fac4 (casos de existos mejorado)
                ))}
            </Box>
        </Box>
    );
};

export default CasosDeExito;