import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';


const Servicios = () => {

  return (
    <>
        <Box id="servicios"  bgcolor="primary.main" sx={{padding:"1rem"}}>
            <Box>
                <Typography variant="h4" align="center" color="white.main" sx={{padding:"1rem"}}  >
                    NUESTROS SERVICIOS
                </Typography>
            </Box>
            <Box display="grid" justifyContent="center" sx={{margin:"1rem"}}>
                <Grid container spacing={2} maxWidth={'md'} >
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid><Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Seguridad
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
  );
}

export default Servicios