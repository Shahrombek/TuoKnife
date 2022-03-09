import {
  Box,
  Typography,
  Grid,
  FormControl,
  OutlinedInput,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { GiBowieKnife, GiBarbecue } from "react-icons/gi";
import { RiKnifeBloodLine } from "react-icons/ri";
// import Imagemap from "";
import Knives1 from "../../Assets/Images/Knives1.png";
import Knives2 from "../../Assets/Images/Knives2.png";
import ReactMapGl from "react-map-gl";
import { useState } from "react";
import { Marker } from "react-map-gl";
import { FaApple } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Mappie from "./Mappie";

function Map() {
  window.scrollTo(0, 0);
  const Item = styled(Box)(({ theme }) => ({}));

  const [viewport, setViewport] = useState({
    latitude: 41.3299592,
    longitude: 69.2844378,
    width: "50vw",
    height: "50vh",
    borderRadius: "25px",
    outline: "none",
    zoom: 10,
  });
  const [viewpoint, setViewpoint] = useState([]);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          color: "white",
          backgroundColor: "#373737",
          textAlign: "center",
          paddingY: "30px",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            mt: "50px",
            fontWeight: "500",
            fontSize: "32px",
            lineheight: "38px",
          }}
        >
          Карта
        </Typography>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "20px, 30px",
            sm: "25px 70px",
            md: "30px 250px",
            lg: "30px 315px",
          },
          backgroundColor: "#272727",
          color: "white",
          md: {
            paddingX: "200px",
          },
        }}
      >
        <Box sx={{ flexGrow: 1, color: "#828282" }}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12}>
              <Item>
                <Box component="form" noValidate autoComplete="off">
                  <FormControl sx={{ width: "100%" }}>
                    <OutlinedInput
                      placeholder="Страна, город, улица..."
                      sx={{
                        color: "#ADACAC",
                        borderRadius: "35px",
                        borderColor: "#ADACAC",
                      }}
                    />
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item md={6} sm={12}>
              <Item>
                <IconButton
                  sx={{
                    color: "#ADACAC",
                    borderColor: "#ADACAC",
                    border: "1px solid",
                    width: "50px",
                    height: "50px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                  }}
                >
                  <GiKnifeFork />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#ADACAC",
                    borderColor: "#ADACAC",
                    border: "1px solid",
                    width: "50px",
                    height: "50px",
                    marginLeft: "30px",
                      marginBottom: "10px",

                  }}
                >
                  <IoIosRestaurant />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#ADACAC",
                    borderColor: "#ADACAC",
                    border: "1px solid",
                    width: "50px",
                    height: "50px",
                    marginLeft: "30px",
                      marginBottom: "10px",

                  }}
                >
                  <GiBowieKnife />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#ADACAC",
                    borderColor: "#ADACAC",
                    border: "1px solid",
                    width: "50px",
                    height: "50px",
                    marginLeft: "30px",
                      marginBottom: "10px",

                  }}
                >
                  <RiKnifeBloodLine />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#ADACAC",
                    borderColor: "#ADACAC",
                    border: "1px solid",
                    width: "50px",
                    height: "50px",
                    marginLeft: "30px",
                      marginBottom: "10px",

                  }}
                >
                  <GiBarbecue />
                </IconButton>
              </Item>
            </Grid>
            <Grid item md={8} sm={12}>
                <Mappie/>
            </Grid>
            <Grid item md={4} sm={12}>
              <Item>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "25px",
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderColor: "#ADACAC",
                    color: "#ADACAC",
                    textTransform: "capitalize",
                  }}
                >
                  Найти ближайший
                </Button>
                <Box></Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          backgroundColor: "#373737",
          textAlign: "center",
          padding: { xs: "50px", sm: "40px 65px", md: "80px 100px 40px 100px" },
        }}
      >
        <Grid container spacing={2}>
          <Grid
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Item sx={{ width: { xs: "100%", sm: "50%" } }}>
              <img src={Knives1} alt="knives" width="80%" />
            </Item>
            <Item
              sx={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "24px",
                  maxWidth: { xs: "100%", sm: "330px" },
                }}
              >
                Исключительное качество без компромиссов
              </Typography>
              <Typography sx={{ maxWidth: { xs: "100%", sm: "330px" } }}>
                Ножи «Tuotown» — это главный инструмент поваров и секрет
                кулинарного мастерства
              </Typography>
            </Item>
          </Grid>

          <Grid
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              margin: '40px 0px'
            }}
          >
           
            <Item
              sx={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                order: {xs: '2', sm:'1'},
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "24px",
                  maxWidth: { xs: "100%", sm: "330px" },
                }}
              >
                Исключительное качество без компромиссов
              </Typography>
              <Typography sx={{ maxWidth: { xs: "100%", sm: "330px" }}}>
                Ножи «Tuotown» — это главный инструмент поваров и секрет
                кулинарного мастерства
              </Typography>
            </Item>
            <Item sx={{ width: { xs: "100%", sm: "50%"} , order: {xs: '1', sm:'2'} }}>
              <img src={Knives2} alt="knives" width="80%" />
            </Item>
          </Grid>
        </Grid>
        <Box sx={{ paddingY: "30px" }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{ lineHeight: "28px", fontSize: "24px", fontWeight: "500" }}
          >
            Узнавайте первым о новинках и новостях
          </Typography>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <FormControl sx={{}}>
            <OutlinedInput
              placeholder="Ваш e-mail"
              sx={{
                borderRadius: "5px !important",
                color: "#ADACAC",
                borderColor: "#ADACAC",
                backgroundColor: "#272727",
              }}
            />
          </FormControl>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Map;