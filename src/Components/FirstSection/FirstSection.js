import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import vh from "../../Assets/Images/100vh.png";

const FirstSection = () => {
  return (
      <Box>
          <Typography
          sx={{ position: "sticky", top: 0, right: 0, zIndex: "-10", margin: '-6px' }}
        >
          <img className="img100vh" src={vh} />
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: { md: "120px", xs: "90px" },
            left: { md: "150px", xs: "50px" },
            zIndex: "-10",
            color: "white",
            fontSize: "100px",
          }}
        >
          <Typography
            sx={{ maxWidth: "500px", fontSize: { md: "35px", xs: "25px" }, fontweight: 'bold' }}
          >
            Исключительное качество без компромиссов
          </Typography>
          <Typography
            sx={{
              maxWidth: "420px",
              fontSize: { md: "20px", xs: "15px" },
              marginTop: "10px",
              fontFamily: `'Montserrat', sans-serif`,
            }}
          >
            Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного
            мастерства
          </Typography>
          <Button
           variant='outlined' color="error">ПОДРОБНЕЕ</Button>
        </Box>
      </Box>
  )
}

export default FirstSection