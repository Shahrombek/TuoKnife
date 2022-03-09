import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import leftRect from "../Assets/Images/Knives1.png";
import middleRect from "../Assets/Images/Knives2.png";
import rightRect from "../Assets/Images/Rectangle 39.png";

const About = () => {
  return (
    <Container>
      <Box
        sx={{
          color: "white",
          p: { md: "50px 0", sm: "40px 0", xs: "30px 0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            flexWrap: { xs: "wrap", md: "nowrap" },
            marginBottom: "40px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100% !important", sm: "320px !important" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <img
              src={leftRect}
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Typography>
            <Typography
              sx={{
                fontSize: "25px",
                maxWidth: "500px",
                margin: "7px 0px 30px 0px",
                fontSiz: "21px",
              }}
            >
              «Tuotown» – легендарные ножи, создающие шедевры
            </Typography>
            <Typography sx={{ maxWidth: "700px", fontSize: "14px" }}>
              Компания «Tuotown» – эксклюзивный представитель профессиональных
              кухонных ножей, изготовленных лучшими мастерами Восточной Азии с
              применением передового европейского оборудования и современных
              материалов. Они отличаются идеальным балансом и фантастической
              остротой. Сочетают в себе вековые традиции и новейшие разработки.
              Также предлагаем широкий ассортимент сопутствующих товаров.
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "50px",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Typography>
            <Typography
              sx={{ maxWidth: "700px", marginBottom: "25px", fontSize: "14px" }}
            >
              Истинная красота ножа — совершённая функциональность и визуальная
              гармония. Этот предмет издревле сопутствовал человеку: от зари
              цивилизации до сегодняшних дней. На протяжении всей истории
              человечества он был верным помощником, незаменимым инструментом
              и грозным оружием. Предлагаем изделия Hi-end качества по доступным
              ценам настоящим ценителям японских ножей.
            </Typography>
            <Typography
              sx={{ maxWidth: "700px", marginBottom: "25px", fontSize: "14px" }}
            >
              Отличительной чертой нашего интернет-магазина являются уникальные
              торговые предложения, эксклюзивность продукции, неизменно высокое
              качество и выгодные цены. Осуществляем продажи элитных японских
              кухонных ножей для профессионалов и любителей. В обширной
              ассортиментной линейке представлены изделия для различных
              потребностей и любого бюджета — от столовых приборов до шеф-ножей.
            </Typography>
            <Typography
              sx={{
                maxWidth: "800px",
                margin: "7px 0px 30px 0px",
                fontSize: "21px",
              }}
            >
              Ножи «Tuotown» – это главный инструмент поваров и секрет
              кулинарного мастерства
            </Typography>
          </Typography>
          <Box
            sx={{
              width: { xs: "100% !important", sm: "320px !important" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <img
              src={rightRect}
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        <Divider
          sx={{ borderColor: "rgba(255, 255, 255, 0.2)", margin: "30px 0px" }}
        />

        <Box>
          <Typography sx={{ fontSize: "21px" }} mb={3}>
            Всё самое интересное о ножах
          </Typography>

          <Box
            display={"flex"}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: { xs: "center", lg: 'space-between'},
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{ position: "relative", "&:hover .dis": { display: "flex" } }}
            >
              <img sx={{ width: "100%", height: "100%" }} src={leftRect} />
              <Box
                className="dis"
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  padding: "20px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "none",
                  borderRadius: "13px",
                  transition: ".5s",
                }}
              >
                <Typography sx={{ textAlign: "end", fontSize: "13px" }}>
                  4 августа 2021 19:24
                </Typography>
                <Typography
                  hover={{ background: "red" }}
                  sx={{
                    background: { hover: "red" },
                  }}
                >
                  Традиционные виды японских кухонных ножей
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ position: "relative", "&:hover .dis": { display: "flex" } }}
            >
              <img sx={{ width: "100%", height: "100%" }} src={middleRect} />
              <Box
                className="dis"
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  padding: "20px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "none",
                  borderRadius: "13px",
                  transition: ".5s",
                }}
              >
                <Typography sx={{ textAlign: "end", fontSize: "13px" }}>
                  4 августа 2021 19:24
                </Typography>
                <Typography
                  hover={{ background: "red" }}
                  sx={{
                    background: { hover: "red" },
                  }}
                >
                  Традиционные виды японских кухонных ножей
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ position: "relative", "&:hover .dis": { display: "flex" } }}
            >
              <img sx={{ width: "100%", height: "100%" }} src={leftRect} />
              <Box
                className="dis"
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  padding: "20px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "none",
                  borderRadius: "13px",
                  transition: ".5s",
                }}
              >
                <Typography sx={{ textAlign: "end", fontSize: "13px" }}>
                  4 августа 2021 19:24
                </Typography>
                <Typography
                  hover={{ background: "red" }}
                  sx={{
                    background: { hover: "red" },
                  }}
                >
                  Традиционные виды японских кухонных ножей
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
