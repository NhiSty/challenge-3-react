import { useRouteError } from "react-router-dom";
import { Stack, Typography } from "@mui/joy";
import toTranslate from "@/utils/translate.js";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Stack
      width={"100vw"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={2}
    >
      <Typography
        sx={{
          fontSize: "2rem",
        }}
      >
        {toTranslate("Oops")}
      </Typography>
      <img
        src="/assets/error-illustration.svg"
        alt="Error"
        style={{
          width: "30%",
        }}
      />
      <Typography>
        {toTranslate("Sorry, an unexpected error has occurred.")}
      </Typography>
      <Typography>
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Stack>
  );
}
