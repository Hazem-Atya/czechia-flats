import { Stack } from "@mui/material";
import React, { ReactElement } from "react";

interface IconTextPropsInterface {
  icon: ReactElement;
  text: string;
}
function IconText(props: IconTextPropsInterface) {
  const { icon, text } = props;
  return (
    <Stack
      sx={{
        width:500,
        flexDirection:"row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2%",
        mt: 4
      }}
    >
      {icon}
      <span>{text}</span>
    </Stack>
  );
}

export default IconText;
