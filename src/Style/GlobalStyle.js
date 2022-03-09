import {GlobalStyles} from "@mui/material";

const inputGlobalStyles = (mode) => (
    <GlobalStyles
        styles={{
            ...(mode === "light"
                ? {}
                : {}),
            body: {
                margin: "0",
                padding: "0",
                backgroundColor: 'rgba(0,0,0,0.9) !important',
            },

            ".MuiListItem-root ": {
                padding: "0 !important"
            },
            ".MuiContainer-root": {},
            ".css-heg063-MuiTabs-flexContainer": {
                justifyContent: "center"
            },
            ".Mui-selected": {
                color: "#FF0000 !important"
            },
            ".MuiTouchRipple-root": {
                display: "none !important"
            },
            ".css-e9km3k-MuiTabs-root": {
            },
            ".css-1e6cyy-MuiTabs-indicator": {
                display: "none !important"
            },
            ".css-17evscu-MuiButtonBase-root-MuiTab-root>.MuiTab-iconWrapper":{
                marginBottom:"30px !important"
            },


        }}
    />
);

export default inputGlobalStyles;