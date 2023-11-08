import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
        <div className= {classes.root}>
            {productos.map((producto, index) => (
                <Card key={index}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={producto.nombre}
                            height="50"
                            image={producto.imagenUrl}
                            title={producto.nombre}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {producto.nombre}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
};

export default CasosDeExito;