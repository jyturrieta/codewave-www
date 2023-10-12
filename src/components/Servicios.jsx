import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';


const Servicios = () => {

  return (
    <>
    <Box id="servicios" p={10} bgcolor="secondary.main">
        <Box>
            <Typography variant="h4" align="center" color="white.main">
                NUESTROS SERVICIOS
            </Typography>
        </Box>
        <Box display="grid" justifyContent="center" mt="1rem" >
            <Grid sx={{maxWidth:"md"}} container spacing={2} >
                <Box item xs={12} sm={6} md={6} display="flex" flexDirection="row">
                    <SecurityIcon/>
                    <Typography>
                        Lorem impsu
                    </Typography>
                </Box>
                <Box item xs={12} sm={6} md={6} display="flex" flexDirection="row">
                    <SecurityIcon />
                    <Typography>
                        Lorem impsu
                    </Typography>
                </Box>
                <Box item xs={12} sm={6} md={6} display="flex" flexDirection="row">
                    <SecurityIcon />
                    <Typography>
                        Lorem impsu
                    </Typography>
                </Box>
                <Box item xs={12} sm={6} md={6} display="flex" flexDirection="row">
                    <SecurityIcon />
                    <Typography>
                        Lorem impsu
                    </Typography>
                </Box>
            </Grid>
        </Box>
    </Box>
    </>
  );
}

export default Servicios