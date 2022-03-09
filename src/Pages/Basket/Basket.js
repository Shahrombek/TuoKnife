import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { CgArrowLongLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { dispatch } from "../../redux/store";
import { BsCreditCard2Back } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";
import { sendProducts } from "../../redux/actions/doing";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Basket(props) {
  window.scrollTo(0, 0);
  // getProducts reduxdan mahsulot malumotini oladi
  const { getBasket } = useSelector((state) => state.allProducts);
  //----------------------------------------------------------------------------------------------
  const [numsProducts, setNumsProducts] = useState();

  const [allPrice, setAllPrice] = useState(0);
  useEffect(() => {
    let S = 0;
    for (let i = 0; i <= getBasket.length - 1; i++) {
      S += getBasket[i].price * getBasket[i].nums;
      setAllPrice(S);
    }
  }, [getBasket]);

  //------------------------------------------------------------------------------
  const navigate = useNavigate();

  // bu funksiya productlarni savatdan o'chiradi
  const removeBasket = (id) => {
    dispatch({ type: "REMOVE_BASKET", payload: id });
  };
  //------------------------------------------------------------------------------

  //savat qismidan asosiy menuga qaytish
  const goBack = () => {
    navigate("/");
  };

  //----------------------------------------------------------------------------------------
  //     const [price,setPrice] =useState(0);

  const handleChange = (e, getItem, index) => {
    e.preventDefault();
    const nums = e.target.value;
    dispatch({
      type: "EDIT_BASKET",
      payload: { data: { ...getItem, nums: nums }, index: index },
    });
  };

  //------------------------------------------------------------------------

  // textfeilddan valuelarni olish
  const nameRef = useRef("");
  const numberRef = useRef("");
  const emailRef = useRef("");
  const sendValue = () => {
    const userData = {
      name: nameRef.current.value,
      phone: numberRef.current.value,
      email: emailRef.current.value,
    };
    if (
      userData.name !== "" &&
      userData.phone !== "" &&
      userData.email !== ""
    ) {
      alert("backendga ketdi");
      console.log(userData);
      sendProducts(getBasket, userData);
    }
    // return console.log(nameRef.current.value,numberRef.current.value,emailRef.current.value);
  };
  return (
    <>
      <Header />
      <Container sx={{ py: "50px" }}>
        <Grid container sx={{ display: "inline" }} spacing={2}>
          <Grid
            item
            xs={8}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
              <Button
                onClick={() => goBack()}
                sx={{ color: "white !important",
                fontSize: { xs: "14px", sm: "15px" }, }}
              >
                <CgArrowLongLeft /> назад
              </Button>
          </Grid>
          <Typography
            component={"h3"}
            sx={{
                color: "white !important",
                fontSize: { xs: "30px", sm: "40px" },
                mb: "50px", 
                textAlign: "center",
              }}
          >
            Kорзина
          </Typography>
          <Grid sx={{ display: "inline" }}>
            {getBasket.map((getItem, id) => {
              return (
                <Card
                  key={id}
                  sx={{
                    display: "flex",
                    padding: "15px",
                    marginY: "10px",
                    justifyContent: "space-between",
                    backgroundColor: "#303030",
                    color: "white",
                  }}
                  xs={12}
                  md={10}
                  lg={8}
                  xl={6}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardMedia
                      component="img"
                      image={getItem.img}
                      alt="green iguana"
                      sx={{
                        borderRadius: "10px",
                        width: "56px",
                        height: "49px",
                        marginRight: "10px",
                      }}
                    />
                    <CardContent
                      sx={{
                        flexWrap: "wrap",
                        minWidth: "200px",
                        alignItems: "center",
                        gap: "20px",
                        display: {xs: 'none', sm: 'block'}
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        margin={0}
                        component="div"

                        sx={{fontSize: '16px'}}
                      >
                        {getItem.title}
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <FormControl fullWidth>
                      <Select
                        sx={{ width: "50px", height: "50px", color: "white !important" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={getItem.nums}
                        name={getItem.price}
                        value={numsProducts}
                        onChange={(e) => handleChange(e, getItem, id)}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Card>
              );
            })}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                backgroundColor: "#232323",
                color: "white",
                borderRadius: "15px",
                marginY: 2,
              }}
              xs={12}
              md={10}
              lg={8}
              xl={6}
              padding={3}
            >
              <Box>
                <Typography>К оплате:</Typography>
                <Typography>{allPrice} so'm</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid container sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
            >
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                color: "white !important",
                marginY: "30px",
              }}
            >
              <Box
                sx={{
                  fontSize: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white !important",
                  width: 80,
                  height: 80,
                  borderRadius: "15px",
                  backgroundColor: "#232323",
                  paddingX: "28px",
                }}
              >
                <HiOutlineLocationMarker />
              </Box>
              <Box>
                <Typography>Доставка</Typography>
                <Typography>Саратов, 25.10 бесплатно</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                color: "white !important",
                marginY: "30px",
              }}
            >
              <Box
                sx={{
                  fontSize: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white !important",
                  width: 80,
                  height: 80,
                  borderRadius: "15px",
                  backgroundColor: "#232323",
                  paddingX: "28px",
                }}
              >
                <BsCreditCard2Back />
              </Box>
              <Box>
                <Typography>Оплата</Typography>
                <Typography>Самый удобный для Вас: Картой на сайте</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            sx={{
              borderRadius: "15px",
              backgroundColor: "#232323",
              color: "white",
              padding: {
                xs: "30px 20px !important",
                sm: "60px 40px !important",
              },
            }}
          >
            <Typography
              component={"h3"}
              sx={{ fontSize: { xs: "20px", sm: "30px" } }}
            >
              Для подтверждения заказа - введите ваши данные и мы перезвоним вам
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{ padding: { sx: "0px", sm: "0px 15px" } }}
              >
                <form>
                  <Input
                    component={"input"}
                    variant="input"
                    sx={{
                      borderRadius: "5px",
                      width: "100%",
                      marginY: "15px",
                      color: "white",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#303030",
                      padding: { xs: "10px 16px", sm: "15px 20px" },
                    }}
                    placeholder={"Имя Фамилия"}
                    required
                    inputRef={nameRef}
                    type={"text"}
                  />
                  <Input
                    component={"input"}
                    variant="input"
                    sx={{
                      borderRadius: "5px",
                      width: "100%",
                      marginY: "15px",
                      color: "white",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#303030",
                      padding: { xs: "10px 16px", sm: "15px 20px" },
                    }}
                    placeholder={"+998(91)464-54-36"}
                    inputRef={numberRef}
                    required
                    type={"number"}
                  />

                  <Input
                    component={"input"}
                    variant="input"
                    sx={{
                      borderRadius: "5px",
                      width: "100%",
                      marginY: "15px",
                      color: "white",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#303030",
                      padding: { xs: "10px 16px", sm: "15px 20px" },
                    }}
                    placeholder={"Ваша почта"}
                    inputRef={emailRef}
                    type={"text"}
                  />
                </form>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{ padding: { sx: "0px", sm: "0px 15px" } }}
              >
                <Box>
                  <Typography
                    sx={{
                      paddingY: "20px",
                      fontSize: { xs: "13px", sm: "15px" },
                    }}
                  >
                    Нажимая «Выбрать способ доставки», подтверждаю, что я
                    ознакомлен с условиями
                    <Typography
                      sx={{ color: "#C80000", display: "inline !important" }}
                    >
                      Публичного договора оферты
                    </Typography>{" "}
                    и{" "}
                    <Typography
                      sx={{ display: "inline !important", color: "#C80000" }}
                    >
                      Политикой конфиденциальности{" "}
                    </Typography>{" "}
                    , а также согласен получать информационную рассылку
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={sendValue}
                    sx={{
                      padding: { xs: "10px 16px", sm: "12px 30px" },
                      color: "white",
                      backgroundColor: "#C80000",
                      borderRadius: "27px",
                      "&:hover": { backgroundColor: "#C82000" },
                    }}
                  >
                    Отправить форму
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Basket;
