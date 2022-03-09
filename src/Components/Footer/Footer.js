import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../../Assets/Images/logo.png";
import { Button, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { md: "50px 100px", sm: "40px 65px", xs: "30px 30px" },
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={10} lg={4} m={"0 auto"}>
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img src={logo} />
            <Typography sx={{ p: "0px 20px", textAlign: "start" }} variant="p">
              легендарные ножи, создающие шедевры
            </Typography>
          </Item>
          <Typography sx={{ fontSize: "14px", color: "white" }} my={2}>
            Компания «Tuotown» – эксклюзивный представитель профессиональных
            кухонных ножей, изготовленных лучшими мастерами Восточной Азии
            с применением передового европейского оборудования и современных
            материалов.
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "white" }} my={2}>
            Они отличаются идеальным балансом и фантастической остротой.
            Сочетают в себе вековые традиции и новейшие разработки.
            Также предлагаем широкий ассортимент сопутствующих товаров.
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={4} m={"0 auto"}>
          <Item>
            <Typography
              sx={{
                fontSize: "17px",
                textAlign: "start",
                fontWeight: "bold",
                marginTop: "6px",
              }}
            >
              Информация
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              my={2}
            >
              <span>Главная</span>
              <span>Новости</span>
              <span>О компании</span>
              <span>Контакты</span>
            </Typography>

            <Typography
              sx={{ fontSize: "17px", textAlign: "start", fontWeight: "bold" }}
              mt={5}
            >
              Каталог
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              my={2}
            >
              <span style={{ margin: "4px 0px" }}>Кухонные ножи</span>
              <span style={{ margin: "4px 0px" }}>Складные ножи</span>
              <span style={{ margin: "4px 0px" }}>Точилки для ножей</span>
              <span style={{ margin: "4px 0px" }}>Аксессуары</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                textAlign: "start",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: " space-between",
                flexWrap: { xs: "wrap", sm: "no-wrap" },
              }}
              mt={5}
            >
              <Typography sx={{ display: "inline-block", marginRight: "10px" }}>
                Мы в соцсетях
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flex: "1",
                  justifyContent: "space-between",
                  margin: "6px 0px",
                }}
              >
                <IconButton
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={10} lg={4} m={"0 auto"} sx={{position: "relative"}}>
          <Item>
            <Typography
              sx={{ fontSize: "17px", textAlign: "start", fontWeight: "bold" }}
            >
              Контактная информация
            </Typography>
            <Typography
              sx={{ fontSize: "19px", textAlign: "start", fontWeight: "bold" }}
            >
              +7 (981) 120-11-17
            </Typography>
            <span
              style={{
                display: "block",
                textAlign: "start",
                margin: "10px 0px",
              }}
            >
              tuotown@mail.ru
            </span>

            <span
              style={{
                display: "block",
                textAlign: "start",
                margin: "25px 0px",
              }}
            >
              08:00 — 18:00, ежедневно
            </span>
            <span
              style={{
                display: "block",
                textAlign: "start",
                margin: "25px 0px",
              }}
            >
              Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф, 22-68-70
            </span>
          </Item>
          <IconButton
          onClick={() => navigate('/login')}
            sx={{
              position: "absolute",
              right: "5px",
              bottom: '30px !important',
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <PersonIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
