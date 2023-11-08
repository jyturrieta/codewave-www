import React from 'react';
import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
    },
});
export const productos = [
    {
        nombre: 'Depatas',
        imagenUrl: depatas,
        webUrl: ''
    },
    {
        nombre: 'Juuk',
        imagenUrl:juuk,
        webUrl: ''
    },
    {
        nombre: 'Nebu',
        imagenUrl:nebu,
        webUrl: ''
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
                <Typography variant="h4" align="center" color="white.main">
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
                    <Item key={index} image={producto.imagenUrl} />
                ))}
            </Box>
        </Box>
    );
};

export default CasosDeExito;