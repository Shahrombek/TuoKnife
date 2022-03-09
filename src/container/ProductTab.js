import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardCreator from "../Components/CardCreator";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  tab: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
  },
});
export default function ProductTab(props) {
  const knifesData = useSelector((state) => state.allProducts);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const classes = useStyles(props);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container sx={{ pt: "50px" }}>
      <Box>
        <AppBar position="static" className={classes.tab}>
          <Tabs
            sx={{ backgroundColor: "transparent !important" }}
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              sx={{ fontSize: { xs: "12px", sm: "15px" } }}
              icon={
                <img
                  style={{ width: { xs: "50%", sm: "100%" } }}
                  src="./images/icons/kitchenKnife.svg"
                  alt=""
                />
              }
              label="Кухонные ножи"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontSize: { xs: "12px", sm: "15px" } }}
              icon={
                <img
                  style={{ width: { xs: "50%", sm: "100%" } }}
                  src="./images/icons/fightKnife.svg"
                  alt=""
                />
              }
              label="Складные ножи"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ fontSize: { xs: "12px", sm: "15px" } }}
              icon={
                <img
                  style={{ width: { xs: "50%", sm: "100%" } }}
                  src="./images/icons/toolKnife.svg"
                  alt=""
                />
              }
              label="Точилки для ножей"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ fontSize: { xs: "12px", sm: "15px" } }}
              icon={
                <img
                  style={{ width: { xs: "50%", sm: "100%" } }}
                  src="./images/icons/acecuar.svg"
                  alt=""
                />
              }
              label="Аксессуары для кухни"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          sx={{ width: "100% !important" }}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <CardCreator knifesData={knifesData.products.kitchen} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <CardCreator knifesData={knifesData.products.fightKnife} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <CardCreator knifesData={knifesData.products.knifeTools} />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <CardCreator knifesData={knifesData.products.kitchenTools} />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
}
