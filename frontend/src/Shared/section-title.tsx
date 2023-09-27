import { Divider, Stack, Typography } from "@mui/material";

interface SectionTitlePropsInterface {
  text: string;
}
function SectionTitle(props: SectionTitlePropsInterface) {
  const { text } = props;
  return (
    <Stack flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h4" color={"#133b5c"}>
        {text}
      </Typography>
      <Divider
        variant="middle"
        sx={{
          borderBottomWidth: "4px",
          width: "30%",
          backgroundColor: "#133b5c",
        }}
      />
    </Stack>
  );
}

export default SectionTitle;
