import { Stack, styled, Typography } from "@mui/joy";
import toTranslate from "@/utils/translate.js";

export default function HomePage() {
  return (
    <>
      <Stack
        minWidth={"100vw"}
        minHeight={"100vh"}
        bgcolor={"rgba(113,0,250,0.76)"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        <Stack
          width={"50%"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          pl={10}
          pr={4}
          spacing={2}
        >
          <CustomTypography>
            {toTranslate("Vous vous sentez seul ?")}
          </CustomTypography>
          <CustomTypography>
            {toTranslate(
              "Vous n'avez personne avec qui partager vos passions et vos discutions ?",
            )}
          </CustomTypography>
          <CustomTypography>
            {toTranslate("Marre de la solitude et du confinement ?")}
          </CustomTypography>
          <CustomTypography>
            {toTranslate("Envie de nouvelles expériences ?")}
          </CustomTypography>
          <CustomTypography>
            {toTranslate(
              "Avec Rent-A-Dream, transformez vos rêves en réalité !",
            )}
          </CustomTypography>
          <CustomTypography sx={{ textDecoration: "underline" }}>
            {toTranslate("Ne cherchez plus, CHOISISSEZ !")}
          </CustomTypography>
        </Stack>

        <Stack
          width={"45%"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          pr={10}
        >
          <img
            src={"/assets/illustration-homepage.svg"}
            alt={"Illustration"}
            width={"100%"}
          />
        </Stack>
      </Stack>
      <Stack height={"500px"}>Coucou</Stack>
    </>
  );
}

const CustomTypography = styled(Typography)`
  font-family: "Happy Monkey", sans-serif;
  font-size: 24px;
  color: white;
`;
