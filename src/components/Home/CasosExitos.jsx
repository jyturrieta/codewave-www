import React from 'react';
import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from "@mui/material";

import {Item} from "./Portfolio";

import depatas from '../../assets/casosExitos/depatas.png'
import juuk from '../../assets/casosExitos/juuk.png'
import nebu from '../../assets/casosExitos/nebu.png'

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
                <Typography
                    variant="h4"
                    align="center"
                    style={{color:'#ffffff'}}>
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
                    <Item key={index} image={producto.imagenUrl} descripcion={producto.descripcion} nombre={producto.nombre} />
                ))}
            </Box>
        </Box>
    );
};

export default CasosDeExito;