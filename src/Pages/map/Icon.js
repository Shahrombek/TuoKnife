import React from "react";
import { IconButton } from "@mui/material";
import { GiKnifeFork } from "react-icons/gi";

function Icon(children) {
  return (
    <div>
      <IconButton
        sx={{
          color: "#ADACAC",
          borderColor: "#ADACAC",
          border: "1px solid",
          width: "50px",
          height: "50px",
          marginLeft: "30px",
        }}
      >
        {children}
      </IconButton>
    </div>
  );
}

export default Icon;
